import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import {Wrapper} from '../../../utils/hoc/Wrapper';
import {
    BACKGROUND_COLOR,
    BORDER_RADIUS,
    GAP,
    PADDING_HORIZONTAL,
    PADDING_VERTICAL,
    TEXT_COLOR,
    TEXT_SHADOW_COLOR,
} from '../../../constants/constants';
import {CurrentDrinkProps} from '../../../types/NavigationTypes';
import {DrinksDataPropertyType, DrinkType} from '../../../store/data/drinks';
import {ImageWithLoading} from '../../../utils/hoc/ImageWithLoading';

export const CurrentDrink = ({route}: CurrentDrinkProps) => {
    const {
        name,
        description,
        imageUrl,
        data,
    } = {...route.params} as DrinkType & DrinksDataPropertyType;

    return (
        <Wrapper>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <ImageWithLoading styles={styles.image} source={{uri: imageUrl}}/>
            </ScrollView>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: GAP,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: BORDER_RADIUS,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        textAlign: 'center',
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
    image: {
        width: Dimensions.get('window').width - PADDING_HORIZONTAL * 2,
        height: Dimensions.get('window').width - PADDING_HORIZONTAL * 2,
        resizeMode: 'cover',
        borderRadius: BORDER_RADIUS,
    },
});