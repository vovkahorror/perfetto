import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {modelsSlice} from './models-slice';
import thunk from 'redux-thunk';
import {drinksSlice} from './drinks-slice';

const rootReducer = combineReducers({
    models: modelsSlice,
    drinks: drinksSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).prepend(thunk),
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;