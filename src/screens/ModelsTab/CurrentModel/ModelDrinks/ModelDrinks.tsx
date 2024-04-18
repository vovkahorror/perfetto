import {Dimensions, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    DrinkType,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    OtherDrinksType,
} from '../../../../store/data/drinks';
import {GAP, PADDING_HORIZONTAL} from '../../../../constants/constants';
import {ModelDrinksItem} from './ModelDrinksItem/ModelDrinksItem';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {ModelsStackParamList} from '../../../../types/NavigationTypes';
import {memo} from 'react';

export const ModelDrinks = memo(({drinks, navigation}: ModelDrinksProps) => {
    const renderItem: ListRenderItem<DrinkType> = ({item}) => <ModelDrinksItem item={item} navigation={navigation}/>;

    return (
        <FlatList
            horizontal={true}
            data={drinks}
            renderItem={renderItem}
            numColumns={1}
            contentContainerStyle={styles.container}
        />
    );
});

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        gap: GAP,
        marginTop: GAP,
        marginBottom: 1,
        width: Dimensions.get('window').width - PADDING_HORIZONTAL * 2 - 80,
    },
});

interface ModelDrinksProps {
    drinks: HotCoffeeDrinksType | HotMilkDrinksType | ColdCoffeeDrinksType | ColdMilkDrinksType | OtherDrinksType;
    navigation:  NativeStackNavigationProp<ModelsStackParamList>;
}