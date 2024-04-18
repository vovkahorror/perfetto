import {CoffeeMachine} from '../store/data/models';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DrinkType} from '../store/data/drinks';
import {NavigatorScreenParams} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
    ModelsTab: undefined;
    DrinksTab: NavigatorScreenParams<DrinksStackParamList>;
    TechnologiesTab: undefined;
}

// Models Screens
export type ModelsStackParamList = {
    Models: undefined;
    CurrentModel: CoffeeMachine | undefined;
    Instruction: { uri: string | undefined } | undefined;
    CurrentDrink: DrinkType;
}

export type ModelsProps = NativeStackScreenProps<ModelsStackParamList, 'Models'>;
export type CurrentModelProps = NativeStackScreenProps<ModelsStackParamList, 'CurrentModel'>;
export type InstructionProps = NativeStackScreenProps<ModelsStackParamList, 'Instruction'>;

export type ModelsDrawerParamList = {
    ModelsList: undefined;
}

export type ModelsListProps = DrawerScreenProps<ModelsDrawerParamList, 'ModelsList'>

// Drinks Screens
export type DrinksStackParamList = {
    Drinks: undefined;
    CurrentDrink: DrinkType;
}

export type DrinksTabParamList = BottomTabScreenProps<RootTabParamList, 'DrinksTab'>

export type DrinksProps = NativeStackScreenProps<DrinksStackParamList, 'Drinks'>;
export type CurrentDrinkProps = NativeStackScreenProps<DrinksStackParamList, 'CurrentDrink'>;

