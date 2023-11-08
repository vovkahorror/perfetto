import {AppStateType} from '../../store/store';

export const selectModels = (state: AppStateType) => state.models.models;
export const selectDrinks = (state: AppStateType) => state.drinks.drinks;
export const selectSelectedDrinks = (state: AppStateType) => state.drinks.selectedDrinks;
export const selectSearchQuery = (state: AppStateType) => state.models.searchQuery;