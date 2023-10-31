import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {allDrinks, allModels, DrinksDataType} from './data/summary-data';

const slice = createSlice({
    name: 'models',
    initialState: {
        models: allModels,
        drinks: allDrinks,
        searchQuery: '',
        selectedDrinks: {
            hotCoffeeDrinks: [] as string[],
            hotMilkDrinks: [] as string[],
            coldCoffeeDrinks: [] as string[],
            coldMilkDrinks: [] as string[],
            otherDrinks: [] as string[],
        },
    },
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
            state.models = allModels.filter((el) => {
                const normalizedModel = el.model.toLowerCase().replace(/[\s.,;!?]/g, '');
                const normalizedPayload = action.payload.toLowerCase().replace(/[\s.,;!?]/g, '');
                const pattern = new RegExp(normalizedPayload, 'g');
                return pattern.test(normalizedModel);
            });
        },

        setSelectedDrinks(state, action: PayloadAction<{
            drink: string,
            drinkKey: keyof DrinksDataType
        }>) {
            const {drink, drinkKey} = action.payload;

            state.selectedDrinks[drinkKey] = state.selectedDrinks[drinkKey]?.includes(drink)
                ? state.selectedDrinks[drinkKey]?.filter((selectedDrink) => selectedDrink !== drink)
                : [...state.selectedDrinks[drinkKey], drink];


            /*state.selectedDrinks = state.selectedDrinks.includes(action.payload.drink)
                ? state.selectedDrinks.filter((selectedDrink) => selectedDrink !== action.payload.drink)
                : [...state.selectedDrinks, action.payload.drink];*/

            /*state.models = allModels.filter((el) => {
                const arr = [];
                state.selectedDrinks.forEach((drink) => {
                    if (el.functions.drinks[action.payload.drinkKey]?.includes(drink as never)) {
                        arr.push(drink);
                    }
                });
                return arr.length === state.selectedDrinks.length;
            });*/
        },
    },
});

export const modelsSlice = slice.reducer;
export const {setSearch, setSelectedDrinks} = slice.actions;