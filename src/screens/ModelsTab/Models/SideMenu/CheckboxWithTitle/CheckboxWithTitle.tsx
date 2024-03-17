import {Checkbox} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {DrinksDataType} from '../../../../../store/data/summary-data';
import {memo} from 'react';
import {TEXT_COLOR} from '../../../../../constants/constants';
import {DrinkType} from '../../../../../store/data/drinks';

export const CheckboxWithTitle = memo(({drink, drinkKey, isPressed, handleCheck}: CheckboxWithTitleProps) => {
    return (
        <Checkbox.Item
            label={drink.name}
            status={isPressed ? 'checked' : 'unchecked'}
            onPress={() => handleCheck(drink, drinkKey)}
            style={styles.checkbox}
            labelStyle={styles.label}
            color={TEXT_COLOR}
            uncheckedColor={TEXT_COLOR}
            theme={{colors: {onSurface: TEXT_COLOR}}}/>
    );
});

interface CheckboxWithTitleProps {
    drink: DrinkType;
    drinkKey: keyof DrinksDataType;
    isPressed: boolean;
    handleCheck: (drink: DrinkType, drinkKey: keyof DrinksDataType) => void;
}

const styles = StyleSheet.create({
    checkbox: {
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    label: {
        textAlign: 'right',
        color: TEXT_COLOR,
    },
});