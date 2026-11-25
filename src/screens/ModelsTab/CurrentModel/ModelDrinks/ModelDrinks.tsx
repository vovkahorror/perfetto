import {StyleSheet, View} from 'react-native';
import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    DrinkType,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    OtherDrinksType,
} from '../../../../store/data/drinks';
import {GAP} from '../../../../constants/constants';
import {ModelDrinksItem} from './ModelDrinksItem/ModelDrinksItem';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ModelsStackParamList} from '../../../../types/NavigationTypes';
import {memo} from 'react';

export const ModelDrinks = memo(({ drinks, navigation }: ModelDrinksProps) => {
    return (
        <View style={styles.container}>
            {drinks.map((item: DrinkType, index: number) => (
                <View key={index} style={styles.itemWrapper}>
                    <ModelDrinksItem item={item} navigation={navigation} />
                </View>
            ))}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: GAP,
        marginTop: GAP,
    },
    itemWrapper: {
        alignSelf: 'flex-start',
    },
});

interface ModelDrinksProps {
    drinks: HotCoffeeDrinksType | HotMilkDrinksType | ColdCoffeeDrinksType | ColdMilkDrinksType | OtherDrinksType;
    navigation:  NativeStackNavigationProp<ModelsStackParamList>;
}