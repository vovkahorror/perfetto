import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {AppStateType} from '../../store/store';

export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatchType>();