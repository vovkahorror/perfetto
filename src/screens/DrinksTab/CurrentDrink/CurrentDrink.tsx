import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
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
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                    <Text style={styles.name}>{name}</Text>
                    <ImageWithLoading styles={styles.image} source={{uri: imageUrl}}/>
                    <Text style={styles.description}>{description}</Text>

                    {data && data.process && data.process.general &&
                        <ListAccordion
                            title="Процес приготування"
                            icon="magic-staff"
                            expanded>
                            <ListItemWithCheck title="Вага кавових зерен, г"
                                               description={data.process.general.beanWeight}/>
                            <ListItemWithCheck title="Попереднє змочування"
                                               description={data.process.general.preWetting}/>
                            <ListItemWithCheck title="Тиск при заварюванні"
                                               description={data.process.general.pressure}/>
                            <ListItemWithCheck title="Об'єм кави" description={data.process.general.coffee}/>
                            <ListItemWithCheck title="Екстракція" description={data.process.general.extraction}/>
                            <ListItemWithCheck title="Об'єм молока" description={data.process.general.milk}/>
                            <ListItemWithCheck title="Молочна пінка" description={data.process.general.milkFoam}/>
                            <ListItemWithCheck title="Порядок подачі" description={data.process.general.submission}/>
                        </ListAccordion>}

                    {data && data.process && data.process.ice &&
                        <ListAccordion
                            title="Ice"
                            icon="hexagon-slice-3"
                            expanded>
                            <ListItemWithCheck title="Об'єм кави" description={data.process.ice.coffee}/>
                            <ListItemWithCheck title="Об'єм води" description={data.process.ice.water}/>
                            <ListItemWithCheck title="Об'єм молока" description={data.process.ice.milk}/>
                            <ListItemWithCheck title="Кубики льоду" description={data.process.ice.iceCubes}/>
                        </ListAccordion>}

                    {data && data.process && data.process.extraIce &&
                        <ListAccordion
                            title="Extra Ice"
                            icon="hexagon-slice-6"
                            expanded>
                            <ListItemWithCheck title="Об'єм кави" description={data.process.extraIce.coffee}/>
                            <ListItemWithCheck title="Об'єм води" description={data.process.extraIce.water}/>
                            <ListItemWithCheck title="Об'єм молока" description={data.process.extraIce.milk}/>
                            <ListItemWithCheck title="Кубики льоду" description={data.process.extraIce.iceCubes}/>
                        </ListAccordion>}

                    {data && data.result &&
                        <ListAccordion
                            title="Результат"
                            icon="coffee-to-go"
                            expanded>
                            <ListItemWithCheck title="Об'єм" description={data.result.volume}/>
                            <ListItemWithCheck title="Зовнішній вигляд" description={data.result.appearance}/>
                        </ListAccordion>}
                </ScrollView>
            </View>
        </Wrapper>
    );
};

const ListItemWithCheck = ({title, description, ...props}: {
    title: string,
    description?: string | number | boolean
}) => {
    const simplifiedDescription = typeof description === 'boolean' ? (description ? 'Так' : 'Ні') : description;

    return (
        <>
            {description !== null && description !== undefined &&
                <ListItem title={title} description={simplifiedDescription} {...props}/>}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: BORDER_RADIUS,
    },
    contentContainerStyle: {
        gap: GAP,
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