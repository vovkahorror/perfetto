import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {CoffeeMachine} from '../../../../../store/data/models';
import {FC, useEffect, useRef, useState} from 'react';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {ModelsStackParamList} from '../../../../../types/NavigationTypes';
import {BACKGROUND_COLOR, BORDER_RADIUS, TEXT_COLOR, TEXT_SHADOW_COLOR} from '../../../../../constants/constants';

export const ModelItem: FC<ModelItemProps> = ({item, navigation}) => {
    const [isPressed, setIsPressed] = useState(false);
    const transformAnimValue = useRef(new Animated.Value(1)).current;

    const handlePress = (item: CoffeeMachine) => {
        setIsPressed(true);
        navigation.navigate('CurrentModel', item);
    };

    useEffect(() => {
        Animated.timing(transformAnimValue, {
            toValue: isPressed ? 1.3 : 1,
            duration: 200,
            useNativeDriver: true,
        }).start();

        const timeout = setTimeout(() => setIsPressed(false), 500);

        return () => {
            transformAnimValue.setValue(1);
            clearTimeout(timeout);
        };
    }, [isPressed]);


    return (
        <Pressable onPress={() => handlePress(item)}>
            <Animated.View style={[styles.container, {transform: [{scale: transformAnimValue}]}]}>
                <Image style={styles.image} source={{uri: item.imageUrls[0]}}/>
                <View>
                    <Text style={styles.model}>{item.model}</Text>
                    <Text style={styles.series}>{item.series}</Text>
                </View>
            </Animated.View>
        </Pressable>
    );
};

interface ModelItemProps {
    item: CoffeeMachine;
    navigation: NativeStackNavigationProp<ModelsStackParamList, 'Models'>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        transition: 0.3,
        padding: 10,
        borderRadius: BORDER_RADIUS,
        backgroundColor: BACKGROUND_COLOR,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: BORDER_RADIUS,
    },
    model: {
        fontSize: 18,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    },
    series: {
        fontSize: 16,
        fontStyle: 'italic',
        color: TEXT_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    },
});