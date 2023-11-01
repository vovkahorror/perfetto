import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {allModels} from './data/summary-data';
import {CoffeeMachine} from './data/models';
import {normalizeText} from '../utils/util-functions/normalizeText';
import {SelectedDrinks} from './drinks-slice';

const slice = createSlice({
    name: 'models',
    initialState: {
        models: allModels,
        searchQuery: '',
    } as ModelsState,

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

        setSelectedModels(state, action: PayloadAction<SelectedDrinks>) {
            const selectedDrinks = action.payload;

            if (Object.keys(selectedDrinks).some((drinkKey) => selectedDrinks[drinkKey as keyof SelectedDrinks].length > 0)) {
                state.models = allModels.filter((model) => {
                    return Object.keys(selectedDrinks).every((drinkKey) => {
                        return selectedDrinks[drinkKey as keyof SelectedDrinks].every((drink) => {
                            return model.functions.drinks[drinkKey as keyof SelectedDrinks]?.includes(drink as never);
                        });
                    });
                });
            } else {
                state.models = allModels;
            }
        },

        resetModels(state) {
            state.models = allModels;
        }
    },
});

interface ModelsState {
    models: CoffeeMachine[];
    searchQuery: string;
}

export const modelsSlice = slice.reducer;
export const {setSearch, setSelectedModels, resetModels} = slice.actions;