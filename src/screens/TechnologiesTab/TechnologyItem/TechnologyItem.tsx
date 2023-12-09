import {Image, Text, StyleSheet, Dimensions, View} from 'react-native';
import {Technology} from '../../../store/data/technologies';
import {ListAccordion} from '../../../utils/hoc/ListAccordion';
import {BACKGROUND_COLOR, BORDER_RADIUS, GAP, PADDING_HORIZONTAL} from '../../../constants/constants';

export const TechnologyItem = ({item}: TechnologyItemProps) => {
    return (
        <View style={styles.container}>
            <ListAccordion title={item.title}>
                <View style={styles.contentContainer}>
                    <Image source={{uri: item.image}} style={styles.image} resizeMode={'cover'}/>
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
        gap: GAP,
    },
    image: {
        alignSelf: 'center',
        width: Dimensions.get('window').width - PADDING_HORIZONTAL * 4,
        height: 300,
        borderRadius: BORDER_RADIUS,
    },
    text: {
        paddingLeft: PADDING_HORIZONTAL,
        paddingRight: PADDING_HORIZONTAL,
    }
});