import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {modelsReducer} from './models-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    models: modelsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).prepend(thunk),
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;