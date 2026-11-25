import {ListRenderItem, SectionList, StyleSheet, Text, View} from 'react-native';
import {Wrapper} from '../../../utils/components/Wrapper';
import {useAppSelector} from '../../../utils/custom-hooks/useAppSelector';
import {selectDrinks} from '../selectors';
import {
    GAP,
    PADDING_HORIZONTAL,
    PADDING_VERTICAL,
    TEXT_COLOR,
    TEXT_FOCUS_COLOR,
    TEXT_SHADOW_COLOR,
} from '../../../constants/constants';
import {DrinkType} from '../../../store/data/drinks';
import {DrinkItem} from './DrinkItem/DrinkItem';
import {DrinksProps} from '../../../types/NavigationTypes';
import {memo} from 'react';

const backgroundImage = require('../../../../assets/background/background4.webp');

const COLUMNS = 3;

const toRows = (drinks: DrinkType[]) => {
    const rows: DrinkType[][] = [];

    for (let index = 0; index < drinks.length; index += COLUMNS) {
        rows.push(drinks.slice(index, index + COLUMNS));
    }

    return rows;
};

export const DrinksList = memo(({navigation}: DrinksProps) => {
    const drinks = useAppSelector(selectDrinks);

    const sections = [
        {title: 'Гарячі кавові напої', data: toRows(drinks.hotCoffeeDrinks)},
        {title: 'Гарячі молочні напої', data: toRows(drinks.hotMilkDrinks ?? [])},
        {title: 'Холодні кавові напої', data: toRows(drinks.coldCoffeeDrinks ?? [])},
        {title: 'Холодні молочні напої', data: toRows(drinks.coldMilkDrinks ?? [])},
        {title: 'Інші напої', data: toRows(drinks.otherDrinks)},
    ];

    const renderItem: ListRenderItem<DrinkType[]> = ({item}) => (
        <View style={styles.row}>
            {item.map((drink) => (
                <DrinkItem key={drink.name} item={drink} navigation={navigation}/>
            ))}
        </View>
    );

    return (
        <Wrapper backgroundImage={backgroundImage}>
            <SectionList
                sections={sections}
                renderItem={renderItem}
                keyExtractor={(row) => row[0].name}
                renderSectionHeader={({section}) => <Text style={styles.title}>{section.title}</Text>}
                ListFooterComponent={(
                    <Text style={styles.text}>
                        Указані значення засновані на заводських налаштуваннях за замовчуванням для нової машини, що використовує певну еталонну каву
                    </Text>
                )}
                contentContainerStyle={styles.contentContainerStyle}
                stickySectionHeadersEnabled={false}/>
        </Wrapper>
    );
});

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        gap: GAP,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: TEXT_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 4,
        paddingTop: GAP,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: GAP,
    },
    text: {
        paddingHorizontal: PADDING_HORIZONTAL,
        fontSize: 14,
        fontWeight: '700',
        color: TEXT_FOCUS_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
});
