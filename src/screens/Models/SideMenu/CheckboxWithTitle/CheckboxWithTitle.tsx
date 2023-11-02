import {Checkbox} from 'react-native-paper';
import {DrinksDataType} from '../../../../store/data/summary-data';
import {memo} from 'react';

export const CheckboxWithTitle = memo(({drink, drinkKey, isPressed, handleCheck}: CheckboxWithTitleProps) => {
    return (
        <Checkbox.Item
            label={drink}
            status={isPressed ? 'checked' : 'unchecked'}
            onPress={() => handleCheck(drink, drinkKey)}/>
    );
});

interface CheckboxWithTitleProps {
    drink: string;
    drinkKey: keyof DrinksDataType;
    isPressed: boolean;
    handleCheck: (drink: string, drinkKey: keyof DrinksDataType) => void;
}