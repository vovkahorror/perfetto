import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {DrinkType} from '../../../../store/data/drinks';
import {ImageWithLoading} from '../../../../utils/components/ImageWithLoading';
import {
    BACKGROUND_COLOR,
    BORDER_RADIUS,
    GAP,
    PADDING_HORIZONTAL,
    TEXT_COLOR,
    TEXT_SHADOW_COLOR,
} from '../../../../constants/constants';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {DrinksStackParamList} from '../../../../types/NavigationTypes';

export const DrinkItem = ({item, navigation}: DrinkItemProps) => {
    const handlePress = (item: DrinkType) => {
        navigation.navigate('CurrentDrink', item);
    };

    return (
        <Pressable onPress={() => handlePress(item)}>
            <View style={styles.container}>
                <ImageWithLoading styles={styles.image} source={{uri: item.imageUrl}}/>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </Pressable>
    );
};

interface DrinkItemProps {
    item: DrinkType;
    navigation: NativeStackNavigationProp<DrinksStackParamList, 'Drinks'>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: GAP,
        width: (Dimensions.get('window').width - PADDING_HORIZONTAL * 2 - GAP * 2) / 3,
        padding: 10,
        borderRadius: BORDER_RADIUS,
        backgroundColor: BACKGROUND_COLOR,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: BORDER_RADIUS,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: TEXT_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
});