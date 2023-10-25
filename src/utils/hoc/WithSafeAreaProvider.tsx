import {ImageBackground, View} from 'react-native';
import {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BACKGROUND_IMAGE_COFFEE_MACHINES} from '../../constants/constants';

export const WithSafeAreaProvider = ({children, backgroundImage}: WithSafeAreaProviderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <ImageBackground source={backgroundImage || BACKGROUND_IMAGE_COFFEE_MACHINES} style={{flex: 1}}>
                {children}
            </ImageBackground>
        </View>
    );
};

interface WithSafeAreaProviderProps {
    children: ReactNode;
    backgroundImage?: string;
}