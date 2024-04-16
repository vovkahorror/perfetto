import {Animated, Image, Pressable, StyleSheet, Text} from 'react-native';
import {v1} from 'react-native-uuid/dist/v1';
import {DrinkType} from '../../../../../store/data/drinks';
import {TEXT_COLOR} from '../../../../../constants/constants';
import {useAppNavigation} from '../../../../../utils/custom-hooks/useAppNavigation';
import {useEffect, useRef, useState} from 'react';

export const ModelDrinksItem = ({item}: ModelDrinksItemProps) => {
    const navigation = useAppNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const transformAnimValue = useRef(new Animated.Value(1)).current;
    let navigationTimeout: NodeJS.Timeout;

    const onPressHandler = (drink: DrinkType) => {
        setIsPressed(true);
        clearTimeout(navigationTimeout);
        navigationTimeout = setTimeout(() => navigation.navigate('DrinksTab', {
            screen: 'CurrentDrink',
            params: drink,
        }), 200);
    };

    useEffect(() => {
        Animated.timing(transformAnimValue, {
            toValue: isPressed ? 0.9 : 1,
            duration: 200,
            useNativeDriver: true,
        }).start();

        const setIsPressedTimeout = setTimeout(() => setIsPressed(false), 500);

        return () => {
            transformAnimValue.setValue(1);
            clearTimeout(setIsPressedTimeout);
        };
    }, [isPressed]);

    return (
        <Pressable key={v1() as string} onPress={() => onPressHandler(item)}>
            <Animated.View style={[styles.item, {transform: [{scale: transformAnimValue}]}]}>
                <Image source={{uri: item.imageUrl}} style={styles.itemImage}/>
                <Text style={styles.itemText}>{item.name}</Text>
            </Animated.View>
        </Pressable>
    );
};

interface ModelDrinksItemProps {
    item: DrinkType;
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        padding: 6,
        borderWidth: 1,
        borderColor: TEXT_COLOR,
        borderRadius: 20,
        transition: 0.2,
    },
    itemImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    itemText: {
        fontWeight: '700',
        fontSize: 16,
        color: TEXT_COLOR,
    },
});