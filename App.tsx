import 'react-native-gesture-handler';
import 'react-native-reanimated';
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
import {TechnologiesTab} from './src/screens/TechnologiesTab/TechnologiesTab';
import {DrinksTab} from './src/screens/DrinksTab/DrinksTab';

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
                        <Tab.Navigator screenOptions={{
                            headerShown: false,
                            tabBarStyle: {backgroundColor: PRIMARY_DARK_COLOR, paddingBottom: 2, borderTopWidth: 0},
                            tabBarLabelStyle: {fontFamily: 'serif'},
                            tabBarActiveTintColor: TEXT_FOCUS_COLOR,
                            tabBarInactiveTintColor: TEXT_COLOR,
                        }}>
                            <Tab.Screen name="ModelsTab"
                                        component={ModelsTab}
                                        options={{
                                            tabBarLabel: 'Моделі',
                                            tabBarIcon: ({focused}) => (
                                                <Icon source={'coffee-maker'}
                                                      color={focused ? TEXT_FOCUS_COLOR : TEXT_COLOR} size={30}/>),
                                        }}/>

                            <Tab.Screen name="DrinksTab"
                                        component={DrinksTab}
                                        options={{
                                            tabBarLabel: 'Напої',
                                            tabBarIcon: ({focused}) => (
                                                <Icon source={'coffee'}
                                                      color={focused ? TEXT_FOCUS_COLOR : TEXT_COLOR} size={30}/>),
                                        }}/>

                            <Tab.Screen name="TechnologiesTab"
                                        component={TechnologiesTab}
                                        options={{
                                            tabBarLabel: 'Технології',
                                            tabBarIcon: ({focused}) => (
                                                <Icon source={'certificate'}
                                                      color={focused ? TEXT_FOCUS_COLOR : TEXT_COLOR} size={30}/>),
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