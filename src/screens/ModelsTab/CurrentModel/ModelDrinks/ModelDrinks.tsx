import {Dimensions, FlatList, Image, ListRenderItem, Pressable, StyleSheet, Text} from 'react-native';
import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    DrinkType,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    OtherDrinksType,
} from '../../../../store/data/drinks';
import {useAppNavigation} from '../../../../utils/custom-hooks/useAppNavigation';
import {v1} from 'react-native-uuid/dist/v1';
import {GAP, PADDING_HORIZONTAL, TEXT_COLOR} from '../../../../constants/constants';

export const ModelDrinks = ({drinks}: ModelDrinksProps) => {
    const navigation = useAppNavigation();

    const onPressHandler = (drink: DrinkType) => navigation.navigate('DrinksTab', {
        screen: 'CurrentDrink',
        params: drink,
    });

    const renderItem: ListRenderItem<DrinkType> = ({item}) => (
        <Pressable key={v1() as string} style={styles.item} onPress={() => onPressHandler(item)}>
            <Image source={{uri: item.imageUrl}} style={styles.itemImage}/>
            <Text style={styles.itemText}>{item.name}</Text>
        </Pressable>);

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
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        padding: 6,
        borderWidth: 1,
        borderColor: TEXT_COLOR,
        borderRadius: 20,
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

interface ModelDrinksProps {
    drinks: HotCoffeeDrinksType | HotMilkDrinksType | ColdCoffeeDrinksType | ColdMilkDrinksType | OtherDrinksType;
}