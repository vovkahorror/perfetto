import {FlatList, ListRenderItem, ScrollView, StyleSheet, Text, View} from 'react-native';
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

export const DrinksList = memo(({navigation}: DrinksProps) => {
    const drinks = useAppSelector(selectDrinks);

    const renderItem: ListRenderItem<DrinkType> = ({item}) => (
        <DrinkItem item={item} navigation={navigation}/>);

    return (
        <Wrapper backgroundImage={backgroundImage}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View>
                    <Text style={styles.title}>Гарячі кавові напої</Text>
                    <FlatList
                        data={drinks.hotCoffeeDrinks}
                        renderItem={renderItem}
                        numColumns={3}
                        contentContainerStyle={styles.contentContainerStyle}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        scrollEnabled={false}
                    />
                </View>

                <View>
                    <Text style={styles.title}>Гарячі молочні напої</Text>
                    <FlatList
                        data={drinks.hotMilkDrinks}
                        renderItem={renderItem}
                        numColumns={3}
                        contentContainerStyle={styles.contentContainerStyle}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        scrollEnabled={false}
                    />
                </View>

                <View>
                    <Text style={styles.title}>Холодні кавові напої</Text>
                    <FlatList
                        data={drinks.coldCoffeeDrinks}
                        renderItem={renderItem}
                        numColumns={3}
                        contentContainerStyle={styles.contentContainerStyle}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        scrollEnabled={false}
                    />
                </View>

                <View>
                    <Text style={styles.title}>Холодні молочні напої</Text>
                    <FlatList
                        data={drinks.coldMilkDrinks}
                        renderItem={renderItem}
                        numColumns={3}
                        contentContainerStyle={styles.contentContainerStyle}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        scrollEnabled={false}
                    />
                </View>

                <View>
                    <Text style={styles.title}>Інші напої</Text>
                    <FlatList
                        data={drinks.otherDrinks}
                        renderItem={renderItem}
                        numColumns={3}
                        contentContainerStyle={styles.contentContainerStyle}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        scrollEnabled={false}
                    />
                </View>

                <Text style={styles.text}>
                    Указані значення засновані на заводських налаштуваннях за замовчуванням для нової машини, що використовує певну еталонну каву
                </Text>
            </ScrollView>
        </Wrapper>
    );
});

const styles = StyleSheet.create({
    scrollView: {
        gap: 20,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: TEXT_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 4
    },
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