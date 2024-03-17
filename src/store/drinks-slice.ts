import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {allDrinks, DrinksDataType} from './data/summary-data';
import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    DrinkType,
    HotCoffeeDrinksType,
    HotMilkDrinksType, OtherDrinksType,
} from './data/drinks';

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
            drink: DrinkType,
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
    hotCoffeeDrinks: DrinkType[];
    hotMilkDrinks: DrinkType[];
    coldCoffeeDrinks: DrinkType[];
    coldMilkDrinks: DrinkType[];
    otherDrinks: DrinkType[];
}

interface DrinksState {
    drinks: DrinksDataType;
    selectedDrinks: SelectedDrinks;
}

export const drinksSlice = slice.reducer;
export const {setSelectedDrinks, resetSelectedDrinks} = slice.actions;