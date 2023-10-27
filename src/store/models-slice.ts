import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {allModels} from './data/summary-data';

const slice = createSlice({
    name: 'models',
    initialState: {
        models: allModels,
        searchQuery: '',
        selectedDrinks: [],
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
    },
});

export const modelsSlice = slice.reducer;
export const {setSearch} = slice.actions;