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
import {DrinksDataPropertyType, DrinkType, Tea} from '../../../store/data/drinks';
import {ImageWithLoading} from '../../../utils/components/ImageWithLoading';
import {ListAccordion} from '../../../utils/components/ListAccordion';
import {ListItemWithCheck} from '../../../utils/components/ListItemWithCheck';
import {useIsFocused} from '@react-navigation/native';

export const CurrentDrink = ({route}: CurrentDrinkProps) => {
    const isFocused = useIsFocused();

    const {
        name,
        description,
        imageUrl,
        data,
    } = {...route.params} as DrinkType & DrinksDataPropertyType;

    return (<>
        {isFocused
        ? <Wrapper>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                        <Text style={styles.name}>{name}</Text>
                        <ImageWithLoading styles={styles.image} source={{uri: imageUrl}}/>
                        <Text style={styles.description}>{description}</Text>

                        {data && data.process && data.process.general &&
                            <ListAccordion
                                title="Процес приготування"
                                icon="magic-staff"
                                expanded
                            >
                                {data && data.process && data.process.ice &&
                                    <View>
                                        <ListAccordion
                                            title="Ice"
                                            icon="hexagon"
                                            expanded
                                        >
                                            <ListItemWithCheck title="Об'єм кави" description={data.process.ice.coffee}/>
                                            <ListItemWithCheck title="Об'єм води" description={data.process.ice.water}/>
                                            <ListItemWithCheck title="Об'єм молока" description={data.process.ice.milk}/>
                                            <ListItemWithCheck title="Кубики льоду"
                                                               description={data.process.ice.iceCubes}/>
                                        </ListAccordion>
                                    </View>}

                                {data && data.process && data.process.extraIce &&
                                    <View>
                                        <ListAccordion
                                            title="Extra Ice"
                                            icon="hexagon-multiple"
                                            expanded
                                        >
                                            <ListItemWithCheck title="Об'єм кави"
                                                               description={data.process.extraIce.coffee}/>
                                            <ListItemWithCheck title="Об'єм води"
                                                               description={data.process.extraIce.water}/>
                                            <ListItemWithCheck title="Об'єм молока"
                                                               description={data.process.extraIce.milk}/>
                                            <ListItemWithCheck title="Кубики льоду"
                                                               description={data.process.extraIce.iceCubes}/>
                                        </ListAccordion>
                                    </View>}

                                {data && data.process && data.process.original &&
                                    <View>
                                        <ListAccordion
                                            title="Original"
                                            icon="check-circle"
                                            expanded
                                        >
                                            <ListItemWithCheck title="Вага кавових зерен, г"
                                                               description={data.process.original.beanWeight}/>
                                            <ListItemWithCheck title="Об'єм кави"
                                                               description={data.process.original.coffee}/>
                                            <ListItemWithCheck title="Кубики льоду"
                                                               description={data.process.original.iceCubes}/>
                                        </ListAccordion>
                                    </View>}

                                {data && data.process && data.process.intense &&
                                    <View>
                                        <ListAccordion
                                            title="Intense"
                                            icon="plus-circle"
                                            expanded
                                        >
                                            <ListItemWithCheck title="Вага кавових зерен, г"
                                                               description={data.process.intense.beanWeight}/>
                                            <ListItemWithCheck title="Об'єм кави"
                                                               description={data.process.intense.coffee}/>
                                            <ListItemWithCheck title="Кубики льоду"
                                                               description={data.process.intense.iceCubes}/>
                                        </ListAccordion>
                                    </View>}

                                {data && data.process && data.process.littleCup &&
                                    <View>
                                        <ListAccordion
                                            title="Маленька чашка"
                                            icon="cup"
                                            expanded
                                        >
                                            <ListItemWithCheck title="Об'єм кави"
                                                               description={data.process.littleCup.coffee}/>
                                            <ListItemWithCheck title="Об'єм молока"
                                                               description={data.process.littleCup.milk}/>
                                            <ListItemWithCheck title="Кубики льоду"
                                                               description={data.process.littleCup.iceCubes}/>
                                        </ListAccordion>
                                    </View>}

                                {data && data.process && data.process.bigCup &&
                                    <View>
                                        <ListAccordion
                                            title="Велика чашка"
                                            icon="glass-mug"
                                            expanded
                                        >
                                            <ListItemWithCheck title="Об'єм кави" description={data.process.bigCup.coffee}/>
                                            <ListItemWithCheck title="Об'єм молока" description={data.process.bigCup.milk}/>
                                            <ListItemWithCheck title="Кубики льоду"
                                                               description={data.process.bigCup.iceCubes}/>
                                        </ListAccordion>
                                    </View>}

                                <ListItemWithCheck title="Вага кавових зерен, г"
                                                   description={data.process.general.beanWeight}/>
                                <ListItemWithCheck title="Попереднє змочування"
                                                   description={data.process.general.preWetting}/>
                                <ListItemWithCheck title="Об'єм кави" description={data.process.general.coffee}/>
                                <ListItemWithCheck title="Об'єм води" description={data.process.general.water}/>
                                <ListItemWithCheck title="Тиск при заварюванні"
                                                   description={data.process.general.pressure}/>
                                <ListItemWithCheck title="Екстракція" description={data.process.general.extraction}/>
                                <ListItemWithCheck title="Об'єм молока" description={data.process.general.milk}/>
                                <ListItemWithCheck title="Молочна пінка" description={data.process.general.milkFoam}/>
                                <ListItemWithCheck title="Порядок подачі" description={data.process.general.submission}/>
                            </ListAccordion>}

                        {data && data.result &&
                            <ListAccordion
                                title="Результат"
                                icon="coffee-to-go"
                                expanded>
                                <ListItemWithCheck title="Об'єм" description={data.result.volume}/>
                                <ListItemWithCheck title="Зовнішній вигляд" description={data.result.appearance}/>
                            </ListAccordion>}

                        {data && data.teas &&
                            <View>
                                {data.teas.map((tea: Tea) => {
                                    return (
                                        <ListAccordion
                                            title={tea.name}
                                            icon="tea"
                                            expanded
                                        >
                                            <ListItemWithCheck title="Температура" description={tea.temperature}/>
                                            <ListItemWithCheck title="Час заварювання"
                                                               description={tea.brewingTime}/>
                                        </ListAccordion>
                                    );
                                })}
                            </View>}
                    </ScrollView>
                </View>
            </Wrapper>
        : null}
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