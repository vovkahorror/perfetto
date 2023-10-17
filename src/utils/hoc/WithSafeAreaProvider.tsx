import {View} from 'react-native';
import {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const WithSafeAreaProvider = ({children}: WithSafeAreaProviderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            {children}
        </View>
    );
};

interface WithSafeAreaProviderProps {
    children: ReactNode;
}