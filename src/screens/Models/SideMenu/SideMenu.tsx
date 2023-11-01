import {FlatList, ListRenderItem, Text} from 'react-native';
import {Wrapper} from '../../../utils/hoc/Wrapper';
import {useAppSelector} from '../../../utils/custom-hooks/useAppSelector';
import {selectDrinks} from '../selectors';
import {DrinksDataType} from '../../../store/data/summary-data';
import {CheckboxWithTitle} from './CheckboxWithTitle/CheckboxWithTitle';
import {Button} from 'react-native-paper';
import {useAppDispatch} from '../../../utils/custom-hooks/useAppDispatch';
import {setSelectedModels} from '../../../store/models-slice';

export const SideMenu = () => {
    const dispatch = useAppDispatch();
    const drinks = useAppSelector(selectDrinks);

    const getRenderItem = (drinkKey: keyof DrinksDataType) => {
        const renderItem: ListRenderItem<string> = ({item}) => <CheckboxWithTitle drink={item} drinkKey={drinkKey}/>;
        return renderItem;
    };

    const applyModelsFilter = () => dispatch(setSelectedModels());

    return (
        <Wrapper backgroundColor={'#55423d'}>
            <FlatList data={drinks.hotCoffeeDrinks} renderItem={getRenderItem('hotCoffeeDrinks')}/>
            <Button onPress={applyModelsFilter}>
                <Text>Застосувати</Text>
            </Button>
        </Wrapper>
    );
};