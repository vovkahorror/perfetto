import {ImageBackground, View} from 'react-native';
import {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BACKGROUND_IMAGE_DEFAULT} from '../../constants/constants';

export const Wrapper = ({children, backgroundImage, backgroundColor}: WithSafeAreaProviderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <>
            {backgroundColor
                ? <View style={{flex: 1, backgroundColor}}>
                    <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom}}>
                        {children}
                    </View>
                </View>
                : <ImageBackground source={backgroundImage || BACKGROUND_IMAGE_DEFAULT}
                                   style={{flex: 1}}>
                    <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom}}>
                        {children}
                    </View>
                </ImageBackground>
            }
        </>
    );
};

interface WithSafeAreaProviderProps {
    children: ReactNode;
    backgroundImage?: string | null;
    backgroundColor?: string;
}