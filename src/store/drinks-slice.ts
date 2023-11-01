import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {allDrinks, DrinksDataType} from './data/summary-data';

export const slice = createSlice({
    name: 'models',
    initialState: {
        drinks: allDrinks,
        selectedDrinks: {
            hotCoffeeDrinks: [],
            hotMilkDrinks: [],
            coldCoffeeDrinks: [],
            coldMilkDrinks: [],
            otherDrinks: [],
        },
    } as DrinksState,

    reducers: {
        setSelectedDrinks(state, action: PayloadAction<{
            drink: string,
            drinkKey: keyof DrinksDataType
        }>) {
            const {drink, drinkKey} = action.payload;

            state.selectedDrinks[drinkKey] = state.selectedDrinks[drinkKey].includes(drink)
                ? state.selectedDrinks[drinkKey].filter((selectedDrink) => selectedDrink !== drink)
                : [...state.selectedDrinks[drinkKey], drink];
        },

        resetSelectedDrinks(state) {
            state.selectedDrinks = {
                hotCoffeeDrinks: [],
                hotMilkDrinks: [],
                coldCoffeeDrinks: [],
                coldMilkDrinks: [],
                otherDrinks: [],
            };
        },
    },
});

export interface SelectedDrinks {
    hotCoffeeDrinks: string[];
    hotMilkDrinks: string[];
    coldCoffeeDrinks: string[];
    coldMilkDrinks: string[];
    otherDrinks: string[];
}

interface DrinksState {
    drinks: DrinksDataType;
    selectedDrinks: SelectedDrinks;
}

export const drinksSlice = slice.reducer;
export const {setSelectedDrinks, resetSelectedDrinks} = slice.actions;