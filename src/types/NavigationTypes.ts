import {CoffeeMachine} from '../store/data/models';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';

export type RootTabParamList = {
    ModelsTab: undefined;
    PatentsTab: undefined;
}

export type ModelsStackParamList = {
    Models: undefined;
    CurrentModel: CoffeeMachine | undefined;
    Instruction: { uri: string | undefined } | undefined;
}

export type ModelsProps = NativeStackScreenProps<ModelsStackParamList, 'Models'>;
export type CurrentModelProps = NativeStackScreenProps<ModelsStackParamList, 'CurrentModel'>;
export type InstructionProps = NativeStackScreenProps<ModelsStackParamList, 'Instruction'>;

export type ModelsDrawerParamList = {
    ModelsList: undefined;
}

export type ModelsListProps = DrawerScreenProps<ModelsDrawerParamList, 'ModelsList'>