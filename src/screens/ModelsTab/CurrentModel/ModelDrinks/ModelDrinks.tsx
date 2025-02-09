import {ScrollView, StyleSheet, View} from 'react-native';
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
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {ModelsStackParamList} from '../../../../types/NavigationTypes';
import {memo} from 'react';

export const ModelDrinks = memo(({ drinks, navigation }: ModelDrinksProps) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {drinks.map((item: DrinkType, index: number) => (
                <View key={index}>
                    <ModelDrinksItem item={item} navigation={navigation} />
                </View>
            ))}
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        gap: GAP,
        marginTop: GAP
    },
});

interface ModelDrinksProps {
    drinks: HotCoffeeDrinksType | HotMilkDrinksType | ColdCoffeeDrinksType | ColdMilkDrinksType | OtherDrinksType;
    navigation:  NativeStackNavigationProp<ModelsStackParamList>;
}