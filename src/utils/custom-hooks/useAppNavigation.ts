import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootTabParamList} from '../../types/NavigationTypes';

export const useAppNavigation = () => useNavigation<NavigationUseType>();

type NavigationUseType = NavigationProp<RootTabParamList>;