import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrinksStackParamList, DrinksTabParamList} from '../../types/NavigationTypes';
import {DrinksList} from './DrinksList/DrinksList';
import {CurrentDrink} from './CurrentDrink/CurrentDrink';

const Stack = createNativeStackNavigator<DrinksStackParamList>();

export const DrinksTab = ({}: DrinksTabParamList) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
            <Stack.Screen name={'Drinks'} component={DrinksList}/>
            <Stack.Screen name={'CurrentDrink'} component={CurrentDrink}/>
        </Stack.Navigator>
    );
};