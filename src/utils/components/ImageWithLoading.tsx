import {Image} from 'expo-image';
import {ImageStyle, StyleProp} from 'react-native';
import {memo} from 'react';

const loadingImage = require('../../../assets/loading.gif');

export const ImageWithLoading = memo(({source, styles}: LoadingProps) => {
    return (
        <Image
            source={source}
            style={styles}
            placeholder={loadingImage}
            placeholderContentFit="contain"
            contentFit="cover"
            transition={200}
            cachePolicy="disk"
        />
    );
});

interface LoadingProps {
    source: { uri: string } | number;
    styles: StyleProp<ImageStyle>;
}