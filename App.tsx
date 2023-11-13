import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {LogBox, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ModelsTab} from './src/screens/ModelsTab/ModelsTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import {RootTabParamList} from './src/types/NavigationTypes';
import {PRIMARY_DARK_COLOR, TEXT_COLOR, TEXT_FOCUS_COLOR} from './src/constants/constants';
import {PatentsTab} from './src/screens/PatentsTab/PatentsTab';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <StatusBar style="light"/>
                    <NavigationContainer>
                        <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: PRIMARY_DARK_COLOR, borderTopWidth: 0}}}>
                            <Tab.Screen name="ModelsTab"
                                        component={ModelsTab}
                                        options={{
                                            tabBarLabel:  'Моделі',
                                            tabBarActiveTintColor: TEXT_FOCUS_COLOR,
                                            tabBarInactiveTintColor: TEXT_COLOR,
                                            tabBarIcon: ({focused}) => <Icon source={'coffee-maker'} color={focused ? TEXT_FOCUS_COLOR : TEXT_COLOR} size={24}/>,
                                        }}/>
                            <Tab.Screen name="PatentsTab"
                                        component={PatentsTab}
                                        options={{
                                            tabBarLabel:  'Патенти',
                                            tabBarActiveTintColor: TEXT_FOCUS_COLOR,
                                            tabBarInactiveTintColor: TEXT_COLOR,
                                            tabBarIcon: ({focused}) => <Icon source={'certificate'} color={focused ? TEXT_FOCUS_COLOR : TEXT_COLOR}  size={24}/>,
                                        }}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                </View>
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});