import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {CoffeeMachine} from '../../../store/models';
import {FC, useEffect, useRef, useState} from 'react';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {RootStackParamList} from '../../../types/NavigationTypes';

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
    navigation: NativeStackNavigationProp<RootStackParamList, 'Models'>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
        transition: 0.3,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    model: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    series: {
        fontSize: 16,
        fontStyle: 'italic',
    },
});