import {Checkbox} from 'react-native-paper';
import {DrinksDataType} from '../../../../store/data/summary-data';
import {useAppDispatch} from '../../../../utils/custom-hooks/useAppDispatch';
import {useAppSelector} from '../../../../utils/custom-hooks/useAppSelector';
import {selectSelectedDrinks} from '../../selectors';
import {setSelectedDrinks} from '../../../../store/drinks-slice';

export const CheckboxWithTitle = ({drink, drinkKey}: CheckboxWithTitleProps) => {
    const dispatch = useAppDispatch();
    const selectedDrinks = useAppSelector(selectSelectedDrinks);

    const handleCheck = (drink: string, drinkKey: keyof DrinksDataType) => {
        dispatch(setSelectedDrinks({drink, drinkKey}));
    };

    return (
        <Checkbox.Item
            label={drink}
            status={selectedDrinks[drinkKey].includes(drink) ? 'checked' : 'unchecked'}
            onPress={() => handleCheck(drink, 'hotCoffeeDrinks')}/>
    );
};

interface CheckboxWithTitleProps {
    drink: string;
    drinkKey: keyof DrinksDataType;
}