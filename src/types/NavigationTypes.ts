import {CoffeeMachine} from '../store/data/models';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';

export type RootStackParamList = {
    Models: undefined;
    CurrentModel: CoffeeMachine | undefined;
    Instruction: { uri: string | undefined } | undefined;
}

export type ModelsProps = NativeStackScreenProps<RootStackParamList, 'Models'>;
export type CurrentModelProps = NativeStackScreenProps<RootStackParamList, 'CurrentModel'>;
export type InstructionProps = NativeStackScreenProps<RootStackParamList, 'Instruction'>;

export type RootDrawerParamList = {
    ModelsList: undefined;
}

export type ModelsListProps = DrawerScreenProps<RootDrawerParamList, 'ModelsList'>