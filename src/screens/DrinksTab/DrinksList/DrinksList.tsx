import {FlatList, ListRenderItem, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Wrapper} from '../../../utils/components/Wrapper';
import {useAppSelector} from '../../../utils/custom-hooks/useAppSelector';
import {selectDrinks} from '../selectors';
import {GAP, PADDING_HORIZONTAL, PADDING_VERTICAL, TEXT_COLOR, TEXT_SHADOW_COLOR} from '../../../constants/constants';
import {DrinkType} from '../../../store/data/drinks';
import {DrinkItem} from './DrinkItem/DrinkItem';
import {DrinksProps} from '../../../types/NavigationTypes';

const backgroundImage = require('../../../../assets/background/background2.webp');

export const DrinksList = ({navigation}: DrinksProps) => {
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
            </ScrollView>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        gap: 20,
        paddingHorizontal: PADDING_HORIZONTAL,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
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
});