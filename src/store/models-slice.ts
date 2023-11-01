import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {allDrinks, allModels, DrinksDataType} from './data/summary-data';
import {CoffeeMachine} from './data/models';
import {normalizeText} from '../utils/util-functions/normalizeText';

const slice = createSlice({
    name: 'models',
    initialState: {
        models: allModels,
        drinks: allDrinks,
        searchQuery: '',
        selectedDrinks: {
            hotCoffeeDrinks: [],
            hotMilkDrinks: [],
            coldCoffeeDrinks: [],
            coldMilkDrinks: [],
            otherDrinks: [],
        },
    } as ModelState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
            state.models = allModels.reduce((filteredModels: CoffeeMachine[], el) => {
                const normalizedModel = normalizeText(el.model);
                const normalizedPayload = normalizeText(action.payload);
                const pattern = new RegExp(normalizedPayload, 'g');
                if (pattern.test(normalizedModel)) {
                    filteredModels.push(el);
                }
                return filteredModels;
            }, []);
        },

        setSelectedDrinks(state, action: PayloadAction<{
            drink: string,
            drinkKey: keyof DrinksDataType
        }>) {
            const {drink, drinkKey} = action.payload;

            state.selectedDrinks[drinkKey] = state.selectedDrinks[drinkKey].includes(drink)
                ? state.selectedDrinks[drinkKey].filter((selectedDrink) => selectedDrink !== drink)
                : [...state.selectedDrinks[drinkKey], drink];
        },

        setSelectedModels(state) {
            if (Object.keys(state.selectedDrinks).some((drinkKey) => state.selectedDrinks[drinkKey as keyof SelectedDrinks].length > 0)) {
                state.models = allModels.filter((model) => {
                    return Object.keys(state.selectedDrinks).every((drinkKey) => {
                        return state.selectedDrinks[drinkKey as keyof SelectedDrinks].every((drink) => {
                            return model.functions.drinks[drinkKey as keyof SelectedDrinks]?.includes(drink as never);
                        });
                    });
                });
            } else {
                state.models = allModels;
            }
        },
    },
});

interface SelectedDrinks {
    hotCoffeeDrinks: string[];
    hotMilkDrinks: string[];
    coldCoffeeDrinks: string[];
    coldMilkDrinks: string[];
    otherDrinks: string[];
}

interface ModelState {
    models: CoffeeMachine[];
    drinks: DrinksDataType;
    searchQuery: string;
    selectedDrinks: SelectedDrinks;
}

export const modelsSlice = slice.reducer;
export const {setSearch, setSelectedDrinks, setSelectedModels} = slice.actions;