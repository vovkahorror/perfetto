import {AppStateType} from '../../store/store';

export const selectDrinks = (state: AppStateType) => state.drinks.drinks;