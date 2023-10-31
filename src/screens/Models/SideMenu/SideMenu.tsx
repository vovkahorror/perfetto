import {FlatList, ListRenderItem} from 'react-native';
import {Wrapper} from '../../../utils/hoc/Wrapper';
import {useAppSelector} from '../../../utils/custom-hooks/useAppSelector';
import {selectDrinks} from '../selectors';
import {DrinksDataType} from '../../../store/data/summary-data';
import {CheckboxWithTitle} from './CheckboxWithTitle/CheckboxWithTitle';

export const SideMenu = () => {
    const drinks = useAppSelector(selectDrinks);

    const getRenderItem = (drinkKey: keyof DrinksDataType) => {
        const renderItem: ListRenderItem<string> = ({item}) => <CheckboxWithTitle drink={item}  drinkKey={drinkKey}/>
        return renderItem;
    }

    return (
        <Wrapper backgroundColor={'#55423d'}>
            <FlatList data={drinks.hotCoffeeDrinks} renderItem={getRenderItem('hotCoffeeDrinks')}/>
        </Wrapper>
    );
};