import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import {Wrapper} from '../../../utils/components/Wrapper';
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
import {ImageWithLoading} from '../../../utils/components/ImageWithLoading';
import {ListItem} from '../../../utils/components/ListItem';
import {ListAccordion} from '../../../utils/components/ListAccordion';

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
                <Text style={styles.description}>{description}</Text>

                <ListAccordion
                    title="Процес приготування"
                    icon="eyedropper">
                    {data.process.beanWeight &&
                        <ListItem title="Вага кавових зерен, г" description={data.process.beanWeight}/>}
                    {data.process.preWetting !== null && data.process.preWetting !== undefined &&
                        <ListItem title="Попереднє змочування" description={data.process.preWetting ? 'Так' : 'Ні'}/>}
                    {data.process.pressure &&
                        <ListItem title="Тиск при заварюванні" description={data.process.pressure}/>}
                </ListAccordion>
            </ScrollView>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    description: {
        fontSize: 16,
        color: TEXT_COLOR,
        fontStyle: 'italic',
    },
});