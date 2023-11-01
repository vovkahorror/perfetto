import {FlatList, ListRenderItem, ScrollView, Text, View} from 'react-native';
import {Wrapper} from '../../../utils/hoc/Wrapper';
import {useAppSelector} from '../../../utils/custom-hooks/useAppSelector';
import {selectDrinks, selectSelectedDrinks} from '../selectors';
import {DrinksDataType} from '../../../store/data/summary-data';
import {CheckboxWithTitle} from './CheckboxWithTitle/CheckboxWithTitle';
import {Button} from 'react-native-paper';
import {useAppDispatch} from '../../../utils/custom-hooks/useAppDispatch';
import {resetModels, setSelectedModels} from '../../../store/models-slice';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {resetSelectedDrinks} from '../../../store/drinks-slice';

export const SideMenu = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const drinks = useAppSelector(selectDrinks);
    const selectedDrinks = useAppSelector(selectSelectedDrinks);

    const getRenderItem = (drinkKey: keyof DrinksDataType) => {
        const renderItem: ListRenderItem<string> = ({item}) => <CheckboxWithTitle drink={item} drinkKey={drinkKey}/>;
        return renderItem;
    };

    const applyFilter = () => {
        dispatch(setSelectedModels(selectedDrinks));
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    const resetFilter = () => {
        dispatch(resetModels());
        dispatch(resetSelectedDrinks());
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <Wrapper backgroundColor={'#55423d'}>
            <ScrollView>
                <View>
                    <Text>Гарячі кавові напої</Text>
                    <FlatList data={drinks.hotCoffeeDrinks} renderItem={getRenderItem('hotCoffeeDrinks')}/>
                </View>

                <View>
                    <Text>Гарячі молочні напої</Text>
                    <FlatList data={drinks.hotMilkDrinks} renderItem={getRenderItem('hotMilkDrinks')}/>
                </View>

                <View>
                    <Text>Холодні кавові напої</Text>
                    <FlatList data={drinks.coldCoffeeDrinks} renderItem={getRenderItem('coldCoffeeDrinks')}/>
                </View>

                <View>
                    <Text>Холодні молочні напої</Text>
                    <FlatList data={drinks.coldMilkDrinks} renderItem={getRenderItem('coldMilkDrinks')}/>
                </View>

                <View>
                    <Text>Інші напої</Text>
                    <FlatList data={drinks.otherDrinks} renderItem={getRenderItem('otherDrinks')}/>
                </View>
            </ScrollView>

            <Button onPress={applyFilter}>
                <Text>Застосувати</Text>
            </Button>
        </Wrapper>
    );
};