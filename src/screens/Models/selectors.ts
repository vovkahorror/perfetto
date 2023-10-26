import {AppStateType} from '../../store/store';

export const selectModels = (state: AppStateType) => state.models.models;
export const selectSearchQuery = (state: AppStateType) => state.models.searchQuery;