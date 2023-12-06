import {createSlice} from '@reduxjs/toolkit';
import {allTechnologies} from './data/summary-data';

export const slice = createSlice({
    name: 'technologies',
    initialState: allTechnologies,
    reducers: {},
});

export const technologiesSlice = slice.reducer;