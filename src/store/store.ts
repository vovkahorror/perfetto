import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {modelsReducer} from './models-reducer';

const rootReducer = combineReducers({
    models: modelsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;