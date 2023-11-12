import {ModelsProps, ModelsDrawerParamList} from '../../../types/NavigationTypes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ModelsList} from './ModelsList/ModelsList';
import {SideMenu} from './SideMenu/SideMenu';

const Drawer = createDrawerNavigator<ModelsDrawerParamList>();

export const Models = ({}: ModelsProps) => {
    return (
        <Drawer.Navigator
            drawerContent={() => <SideMenu/>}
            screenOptions={{headerShown: false}}>
            <Drawer.Screen name={'ModelsList'} component={ModelsList}/>
        </Drawer.Navigator>
    );
};