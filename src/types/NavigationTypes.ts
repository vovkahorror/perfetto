import {CoffeeMachine} from '../store/models';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

export type RootStackParamList = {
    Models: undefined;
    CurrentModel: CoffeeMachine | undefined;
}

export type ModelsProps = NativeStackScreenProps<RootStackParamList, 'Models'>;
export type CurrentModelProps = NativeStackScreenProps<RootStackParamList, 'CurrentModel'>;