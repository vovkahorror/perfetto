import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {Wrapper} from '../../utils/hoc/Wrapper';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {selectDrinks} from './selectors';
import {GAP, PADDING_HORIZONTAL, PADDING_VERTICAL} from '../../constants/constants';
import {DrinkType} from '../../store/data/drinks';
import {DrinkItem} from './DrinkItem/DrinkItem';

const backgroundImage = require('../../../assets/background/background2.webp');

export const DrinksTab = () => {
    const drinks = useAppSelector(selectDrinks);

    const renderItem: ListRenderItem<DrinkType> = ({item}) => (
        <DrinkItem item={item}/>);

    return (
        <Wrapper backgroundImage={backgroundImage}>
            <FlatList
                data={drinks.hotCoffeeDrinks}
                renderItem={renderItem}
                numColumns={3}
                contentContainerStyle={styles.contentContainerStyle}
                columnWrapperStyle={styles.columnWrapperStyle}
                keyboardShouldPersistTaps={'always'}
            />
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        gap: GAP,
    },
    columnWrapperStyle: {
        gap: GAP,
    },
});