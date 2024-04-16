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

export const ModelDrinks = ({drinks}: ModelDrinksProps) => {
    const renderItem: ListRenderItem<DrinkType> = ({item}) => <ModelDrinksItem item={item}/>;

    return (
        <FlatList
            horizontal={true}
            data={drinks}
            renderItem={renderItem}
            numColumns={1}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        />
    );
};

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
}