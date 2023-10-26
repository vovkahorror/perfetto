import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {LogBox, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {Models} from './src/screens/Models/Models';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from './src/types/NavigationTypes';
import {NavigationContainer} from '@react-navigation/native';
import {CurrentModel} from './src/screens/CurrentModel/CurrentModel';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Instruction} from './src/screens/CurrentModel/Instruction/Instruction';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <StatusBar style="light"/>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
                            <Stack.Screen name={'Models'} component={Models}/>
                            <Stack.Screen name={'CurrentModel'} component={CurrentModel}/>
                            <Stack.Screen name={'Instruction'} component={Instruction}/>
                        </Stack.Navigator>
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