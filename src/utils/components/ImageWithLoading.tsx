import {Image, ImageStyle, StyleProp, View} from 'react-native';
import {memo, useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';
import {CacheManager} from 'react-native-expo-image-cache';

const loadingImage = require('../../../assets/loading.gif');

export const ImageWithLoading = memo(({source, styles}: LoadingProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkIfImageIsCached = async () => {
            const uri = (typeof source === 'object' && 'uri' in source) ? source.uri : source;
            const cachedImage = await CacheManager.get(uri as string, {}).getPath();

            if (cachedImage) {
                setLoading(false);
            }
        };

        checkIfImageIsCached();
    }, []);

    return (
        <>
            {loading
                ? <View style={[{justifyContent: 'center', alignItems: 'center'}, styles]}>
                    <Image source={loadingImage} style={[styles, {width: 80}]} resizeMode={'contain'}/>
                </View>
                : <Image
                    source={source}
                    style={styles}
                    onLoad={() => setLoading(false)}/>}
        </>
    );
});

interface LoadingProps {
    source: ImageSourcePropType;
    styles: StyleProp<ImageStyle>;
}