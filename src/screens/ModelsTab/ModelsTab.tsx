import {Models} from './Models/Models';
import {CurrentModel} from './CurrentModel/CurrentModel';
import {Instruction} from './CurrentModel/Instruction/Instruction';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ModelsStackParamList} from '../../types/NavigationTypes';
import {CurrentDrink} from '../DrinksTab/CurrentDrink/CurrentDrink';

const Stack = createNativeStackNavigator<ModelsStackParamList>();

export const ModelsTab = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
            <Stack.Screen name={'Models'} component={Models}/>
            <Stack.Screen name={'CurrentModel'} component={CurrentModel}/>
            <Stack.Screen name={'Instruction'} component={Instruction}/>
            <Stack.Screen name={'CurrentDrink'} component={CurrentDrink}/>
        </Stack.Navigator>
    );
};