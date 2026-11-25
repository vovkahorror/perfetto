import {Image} from 'expo-image';
import {memo, useState} from 'react';
import {
    FlatList,
    ImageStyle,
    LayoutChangeEvent,
    Modal,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Pressable,
    StyleProp,
    StyleSheet,
    useWindowDimensions,
    View,
} from 'react-native';
import {Icon} from 'react-native-paper';
import {TEXT_COLOR} from '../../constants/constants';

export const ImageSlider = memo(({
    images,
    height,
    imageStyle,
    activeIndicatorColor = TEXT_COLOR,
    closeIconColor = '#fff',
}: ImageSliderProps) => {
    const [width, setWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const [preview, setPreview] = useState<string | null>(null);
    const screen = useWindowDimensions();

    const handleLayout = (event: LayoutChangeEvent) => setWidth(event.nativeEvent.layout.width);

    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        setIndex(Math.round(event.nativeEvent.contentOffset.x / width));
    };

    return (
        <View style={[styles.container, {height}]} onLayout={handleLayout}>
            {width > 0 && (
                <FlatList
                    data={images}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(image) => image}
                    getItemLayout={(_, itemIndex) => ({length: width, offset: width * itemIndex, index: itemIndex})}
                    onMomentumScrollEnd={handleScrollEnd}
                    renderItem={({item}) => (
                        <Pressable onPress={() => setPreview(item)} style={{width, height}}>
                            <Image source={{uri: item}}
                                   style={[{width, height}, imageStyle]}
                                   contentFit="cover"
                                   transition={200}
                                   cachePolicy="disk"/>
                        </Pressable>
                    )}/>
            )}

            {images.length > 1 && (
                <View style={styles.indicators} pointerEvents="none">
                    <View style={styles.indicatorPill}>
                        {images.map((image, imageIndex) => (
                            <View key={image}
                                  style={[
                                      styles.indicator,
                                      imageIndex === index && styles.activeIndicator,
                                      imageIndex === index && {backgroundColor: activeIndicatorColor},
                                  ]}/>
                        ))}
                    </View>
                </View>
            )}

            <Modal visible={preview !== null}
                   transparent
                   animationType="fade"
                   onRequestClose={() => setPreview(null)}>
                <View style={styles.preview}>
                    {preview && <Image source={{uri: preview}}
                                       style={{width: screen.width, height: screen.height}}
                                       contentFit="contain"/>}
                    <Pressable style={styles.closeButton}
                               onPress={() => setPreview(null)}
                               accessibilityRole="button"
                               accessibilityLabel="Закрити">
                        <Icon source="close" size={28} color={closeIconColor}/>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
});

interface ImageSliderProps {
    images: string[];
    height: number;
    imageStyle?: StyleProp<ImageStyle>;
    activeIndicatorColor?: string;
    closeIconColor?: string;
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    indicators: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 8,
        alignItems: 'center',
    },
    indicatorPill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    activeIndicator: {
        width: 18,
    },
    preview: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        padding: 6,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
});
