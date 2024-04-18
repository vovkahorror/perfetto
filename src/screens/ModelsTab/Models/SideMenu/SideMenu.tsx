import {FlatList, ListRenderItem, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Wrapper} from '../../../../utils/components/Wrapper';
import {useAppSelector} from '../../../../utils/custom-hooks/useAppSelector';
import {selectDrinks, selectSelectedDrinks} from '../selectors';
import {DrinksDataType} from '../../../../store/data/summary-data';
import {CheckboxWithTitle} from './CheckboxWithTitle/CheckboxWithTitle';
import {Button} from 'react-native-paper';
import {useAppDispatch} from '../../../../utils/custom-hooks/useAppDispatch';
import {resetModels, setSelectedModels} from '../../../../store/models-slice';
import {DrawerActions} from '@react-navigation/native';
import {resetSelectedDrinks, setSelectedDrinks} from '../../../../store/drinks-slice';
import {useCallback} from 'react';
import {PADDING_HORIZONTAL, PADDING_VERTICAL, PRIMARY_DARK_COLOR, TEXT_COLOR} from '../../../../constants/constants';
import {DrinkType} from '../../../../store/data/drinks';
import {useAppNavigation} from '../../../../utils/custom-hooks/useAppNavigation';

export const SideMenu = () => {
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();
    const drinks = useAppSelector(selectDrinks);
    const selectedDrinks = useAppSelector(selectSelectedDrinks);

    const handleCheck = useCallback((drink: DrinkType, drinkKey: keyof DrinksDataType) => {
        dispatch(setSelectedDrinks({drink, drinkKey}));
    }, [dispatch]);

    const applyFilter = useCallback(() => {
        dispatch(setSelectedModels(selectedDrinks));
        navigation.dispatch(DrawerActions.toggleDrawer());
    }, [selectedDrinks]);

    const resetFilter = useCallback(() => {
        dispatch(resetModels());
        dispatch(resetSelectedDrinks());
        navigation.dispatch(DrawerActions.toggleDrawer());
    }, []);

    const getRenderItem = (drinkKey: keyof DrinksDataType) => {
        const renderItem: ListRenderItem<DrinkType> = ({item}) => {
            return (
                <CheckboxWithTitle
                    drink={item}
                    drinkKey={drinkKey}
                    isPressed={selectedDrinks[drinkKey].includes(item)}
                    handleCheck={handleCheck}
                />
            );
        };
        return renderItem;
    };

    return (
        <Wrapper backgroundColor={PRIMARY_DARK_COLOR}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View>
                    <Text style={styles.title}>Гарячі кавові напої</Text>
                    <FlatList data={drinks.hotCoffeeDrinks} renderItem={getRenderItem('hotCoffeeDrinks')}
                              scrollEnabled={false}/>
                </View>

                <View>
                    <Text style={styles.title}>Гарячі молочні напої</Text>
                    <FlatList data={drinks.hotMilkDrinks} renderItem={getRenderItem('hotMilkDrinks')}
                              scrollEnabled={false}/>
                </View>

                <View>
                    <Text style={styles.title}>Холодні кавові напої</Text>
                    <FlatList data={drinks.coldCoffeeDrinks} renderItem={getRenderItem('coldCoffeeDrinks')}
                              scrollEnabled={false}/>
                </View>

                <View>
                    <Text style={styles.title}>Холодні молочні напої</Text>
                    <FlatList data={drinks.coldMilkDrinks} renderItem={getRenderItem('coldMilkDrinks')}
                              scrollEnabled={false}/>
                </View>

                <View>
                    <Text style={styles.title}>Інші напої</Text>
                    <FlatList data={drinks.otherDrinks} renderItem={getRenderItem('otherDrinks')}
                              scrollEnabled={false}/>
                </View>
            </ScrollView>

            <View style={styles.buttonsWrapper}>
                <Button mode={'elevated'} buttonColor={TEXT_COLOR} textColor={PRIMARY_DARK_COLOR} style={{padding: 2}} onPress={applyFilter}>
                    <Text>Застосувати</Text>
                </Button>
                <Button mode={'elevated'} buttonColor={PRIMARY_DARK_COLOR} textColor={TEXT_COLOR} style={styles.resetButton}
                        onPress={resetFilter}>
                    <Text>Скинути</Text>
                </Button>
            </View>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        gap: 20,
        paddingHorizontal: PADDING_HORIZONTAL,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        textAlign: 'center',
        color: TEXT_COLOR,
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: PADDING_VERTICAL,
    },
    resetButton: {
        borderColor: TEXT_COLOR,
        borderStyle: 'solid',
        borderWidth: 2,
    },
});