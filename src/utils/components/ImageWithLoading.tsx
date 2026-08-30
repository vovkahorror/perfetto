import {Image} from 'expo-image';
import {ImageStyle, StyleProp, StyleSheet, View} from 'react-native';
import {memo, useState} from 'react';
import {LoadingBeans} from './LoadingBeans';

export const ImageWithLoading = memo(({source, styles}: LoadingProps) => {
    const [loading, setLoading] = useState(true);

    return (
        <View style={styles}>
            {loading && (
                <View style={{
                    ...StyleSheet.absoluteFill,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <LoadingBeans/>
                </View>
            )}
            <Image
                source={source}
                style={styles}
                contentFit="cover"
                transition={200}
                cachePolicy="disk"
                onLoadEnd={() => setLoading(false)}
            />
        </View>
    );
});

interface LoadingProps {
    source: { uri: string } | number;
    styles: StyleProp<ImageStyle>;
}