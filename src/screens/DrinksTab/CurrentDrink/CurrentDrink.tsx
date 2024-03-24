import {ScrollView, StyleSheet, Text, View} from 'react-native';
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

export const CurrentDrink = ({route}: CurrentDrinkProps) => {
    const {
        name,
        description,
        imageUrl,
        data
    } = {...route.params} as DrinkType & DrinksDataPropertyType;

    return (
        <Wrapper>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.name}>{name}</Text>
                </View>
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
    titleContainer: {
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
});