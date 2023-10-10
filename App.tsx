import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {Models} from './src/screens/models/models';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <StatusBar style="auto"/>
                    <Models/>
                </View>
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});