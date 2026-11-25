import {Image} from 'expo-image';
import {ActivityIndicator, ImageStyle, StyleProp, StyleSheet, View} from 'react-native';
import {memo, useState} from 'react';
import {TEXT_COLOR} from '../../constants/constants';

export const ImageWithLoading = memo(({source, styles}: LoadingProps) => {
    const hasSource = typeof source === 'number' || Boolean(source.uri);
    const [loading, setLoading] = useState(hasSource);

    return (
        <View style={styles}>
            {hasSource && (
                <Image
                    source={source}
                    style={styles}
                    contentFit="cover"
                    transition={200}
                    cachePolicy="disk"
                    onLoadEnd={() => setLoading(false)}
                />
            )}
            {hasSource && loading && (
                <View style={[StyleSheet.absoluteFill, layoutStyles.center]} pointerEvents="none">
                    <ActivityIndicator color={TEXT_COLOR}/>
                </View>
            )}
        </View>
    );
});

interface LoadingProps {
    source: { uri: string } | number;
    styles: StyleProp<ImageStyle>;
}

const layoutStyles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});