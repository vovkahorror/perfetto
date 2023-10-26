import {Text, View} from 'react-native';
import {ModelsProps, RootDrawerParamList} from '../../types/NavigationTypes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ModelsList} from './ModelsList/ModelsList';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const Models = ({}: ModelsProps) => {
    return (
        <Drawer.Navigator drawerContent={() => (
            <View><Text>Hello</Text></View>
        )}
        screenOptions={{headerShown: false}}>
            <Drawer.Screen name={'ModelsList'} component={ModelsList}/>
        </Drawer.Navigator>
    );
};