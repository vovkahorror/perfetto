import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {Models} from './src/screens/Models/Models';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/types/NavigationTypes';
import {NavigationContainer} from '@react-navigation/native';
import {CurrentModel} from './src/screens/CurrentModel/CurrentModel';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <StatusBar style="auto"/>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name={'Models'} component={Models}/>
                            <Stack.Screen name={'CurrentModel'} component={CurrentModel}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </SafeAreaProvider>
        </Provider>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});