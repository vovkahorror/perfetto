import {createSlice} from '@reduxjs/toolkit';
import {
    ecam220_21,
    ecam220_60, ecam22_112,
    ecam290_21,
    ecam290_51, ecam359_55,
    ecam370_70,
    ecam370_95,
    ecam450_65,
    ecam450_86,
    ecam610_74,
    ecam650_85,
    epam960_75,
} from './models';

const slice = createSlice({
    name: 'models',
    initialState: [epam960_75, ecam650_85, ecam610_74, ecam450_86, ecam450_65, ecam370_95, ecam370_70, ecam359_55, ecam290_51, ecam290_21, ecam220_60, ecam220_21, ecam22_112],
    reducers: {},
});

export const modelsReducer = slice.reducer;