import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    ecam220_20,
    ecam220_21, ecam220_31,
    ecam220_60, ecam22_112, ecam250_23,
    ecam290_21, ecam290_31,
    ecam290_51, ecam290_81, ecam350_35sb, ecam350_35w, ecam350_50, ecam350_75, ecam353_75b, ecam353_75w, ecam359_55,
    ecam370_70,
    ecam370_95, ecam380_85, ecam380_95,
    ecam450_65,
    ecam450_86,
    ecam610_74,
    ecam650_85,
    epam960_75,
} from './models';

const allModels = [
    epam960_75,
    ecam650_85,
    ecam610_74,
    ecam450_86,
    ecam450_65,
    ecam380_95,
    ecam380_85,
    ecam370_95,
    ecam370_70,
    ecam359_55,
    ecam353_75w,
    ecam353_75b,
    ecam350_75,
    ecam350_50,
    ecam350_35w,
    ecam350_35sb,
    ecam290_81,
    ecam290_51,
    ecam290_31,
    ecam290_21,
    ecam250_23,
    ecam220_60,
    ecam220_31,
    ecam220_21,
    ecam220_20,
    ecam22_112,
];

const slice = createSlice({
    name: 'models',
    initialState: {
        models: allModels,
        searchQuery: '',
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

export const modelsReducer = slice.reducer;
export const {setSearch} = slice.actions;