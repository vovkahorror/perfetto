import {Checkbox} from 'react-native-paper';
import {DrinksDataType} from '../../../../store/data/summary-data';
import {setSelectedDrinks} from '../../../../store/models-slice';
import {useAppDispatch} from '../../../../utils/custom-hooks/useAppDispatch';
import {useAppSelector} from '../../../../utils/custom-hooks/useAppSelector';
import {selectSelectedDrinks} from '../../selectors';

export const CheckboxWithTitle = ({drink, drinkKey}: CheckboxWithTitleProps) => {
    const dispatch = useAppDispatch();
    const selectedDrinks = useAppSelector(selectSelectedDrinks);

    const handleCheck = (drink: string, drinkKey: keyof DrinksDataType) => {
        dispatch(setSelectedDrinks({drink, drinkKey}));
    };

    console.log(JSON.stringify(selectedDrinks,  null, 2));

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