import {AppStateType} from '../../store/store';

export const selectModels = (state: AppStateType) => state.models.models;
export const selectDrinks = (state: AppStateType) => state.models.drinks;
export const selectSelectedDrinks = (state: AppStateType) => state.models.selectedDrinks;
export const selectSearchQuery = (state: AppStateType) => state.models.searchQuery;