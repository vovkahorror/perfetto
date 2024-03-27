import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Technology} from '../../../store/data/technologies';
import {ListAccordion} from '../../../utils/components/ListAccordion';
import {
    BACKGROUND_COLOR,
    BORDER_RADIUS,
    GAP,
    PADDING_HORIZONTAL,
    PADDING_VERTICAL,
    TEXT_COLOR,
    TEXT_SHADOW_COLOR,
} from '../../../constants/constants';
import YoutubePlayer, {PLAYER_STATES} from 'react-native-youtube-iframe';
import {useCallback, useState} from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import {ImageWithLoading} from '../../../utils/components/ImageWithLoading';
import {v1} from 'react-native-uuid/dist/v1';

export const TechnologyItem = ({item}: TechnologyItemProps) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state: PLAYER_STATES) => {
        if (state === 'ended') {
            setPlaying(false);
        }
    }, []);

    const setOrientation = useCallback((isFullscreen: boolean) => {
        isFullscreen
            ? ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
            : ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }, []);

    return (
        <View style={styles.container}>
            <ListAccordion title={item.title}>
                <View style={styles.contentContainer}>
                    <ImageWithLoading source={{uri: item.image}} styles={styles.image}/>
                    {item.videoId &&
                        item.videoId.map(id => (
                            <View key={v1() as string} style={styles.mediaWrapper}>
                                <YoutubePlayer
                                    height={(400 - (PADDING_HORIZONTAL * 4)) / (16 / 9)}
                                    play={playing}
                                    videoId={id}
                                    onChangeState={onStateChange}
                                    onFullScreenChange={setOrientation}
                                    webViewStyle={{opacity: 0.99}}
                                />
                            </View>
                        ))
                    }
                    <Text style={styles.text}>{item.description}</Text>
                </View>
            </ListAccordion>
        </View>
    );
};

interface TechnologyItemProps {
    item: Technology;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: BORDER_RADIUS,
    },
    contentContainer: {
        paddingLeft: PADDING_HORIZONTAL,
        paddingRight: PADDING_HORIZONTAL,
        paddingBottom: PADDING_VERTICAL,
        gap: GAP,
    },
    image: {
        alignSelf: 'center',
        width: Dimensions.get('window').width - PADDING_HORIZONTAL * 4,
        height: 300,
        borderRadius: BORDER_RADIUS,
    },
    mediaWrapper: {
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: BORDER_RADIUS,
        overflow: 'hidden',
    },
    text: {
        fontSize: 16,
        textAlign: 'justify',
        color: TEXT_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
});