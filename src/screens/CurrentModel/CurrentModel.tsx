import {LayoutChangeEvent, ScrollView, StyleSheet, Text} from 'react-native';
import {CurrentModelProps} from '../../types/NavigationTypes';
import {WithSafeAreaProvider} from '../../utils/hoc/WithSafeAreaProvider';
import {List} from 'react-native-paper';
import {ListItem} from '../../utils/hoc/ListItem';
import {useStringCreator} from '../../utils/custom-hooks/useStringCreator';
import {useConvertBooleanToString} from '../../utils/custom-hooks/useConvertBooleanToString';
import {ListAccordion} from '../../utils/hoc/ListAccordion';
import YoutubePlayer, {PLAYER_STATES} from 'react-native-youtube-iframe';
import {useCallback, useState} from 'react';
import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../../constants/constants';

export const CurrentModel = ({route}: CurrentModelProps) => {
    const {
        model,
        series,
        imageUrl,
        videoId,
        description,
        summary,
        technicalData,
        colourMaterialFinish,
        functions,
        controlPanel,
        features,
        miscellaneous,
    } = {...route.params};

    const [viewWidth, setViewWidth] = useState(400);
    const [playing, setPlaying] = useState(false);

    const handleLayout = useCallback((event: LayoutChangeEvent) => {
        const {width} = event.nativeEvent.layout;
        setViewWidth(width);
    }, []);

    const onStateChange = useCallback((state: PLAYER_STATES) => {
        if (state === 'ended') {
            setPlaying(false);
        }
    }, []);

    return (
        <WithSafeAreaProvider>
            <ScrollView onLayout={handleLayout} style={styles.container}>
                <Text>{model}</Text>
                <Text>{series}</Text>
                <Text>{description}</Text>

                <YoutubePlayer
                    height={(viewWidth - (PADDING_HORIZONTAL * 2)) / (16 / 9)}
                    play={playing}
                    videoId={videoId}
                    onChangeState={onStateChange}
                    webViewStyle={{opacity: 0.99}}
                />

                <List.Section title="Характеристики" titleStyle={styles.listTitle}>
                    <ListAccordion
                        title="Технічні дані"
                        left={props => <List.Icon {...props} icon="ruler"/>}>
                        <ListItem title="Розміри (Ш x Д x В), мм" description={technicalData?.dimensions}/>
                        <ListItem title="Вага, кг" description={technicalData?.weight}/>
                        <ListItem title="Тиск помпи, бар" description={technicalData?.pumpPressure}/>
                        <ListItem title="Ємність контейнера для зерен, г"
                                  description={technicalData?.beansContainerCapacity}/>
                        <ListItem title="Ємність контейнера для води, л"
                                  description={technicalData?.waterContainerCapacity}/>
                        <ListItem title="Ємність контейнера для гущі, шт"
                                  description={technicalData?.groundsContainerCapacity}/>
                        <ListItem title="Ковомолка" description={technicalData?.coffeeGrinder}/>
                        <ListItem title="Ступені помелу" description={technicalData?.degreesOfGrinding}/>
                        <ListItem title="Максимальна висота чашки" description={technicalData?.maxCupHeight}/>
                        <ListItem title="Вхідна потужність, Вт" description={technicalData?.inputPower}/>
                        <ListItem title="Номінальна напруга / Частота"
                                  description={technicalData?.ratedVoltageFrequency}/>
                    </ListAccordion>

                    <ListAccordion
                        title="Колір, матеріал, оздоблення"
                        left={props => <List.Icon {...props} icon="palette"/>}>
                        <ListItem title="Колір" description={colourMaterialFinish?.colour}/>
                        <ListItem title="Матеріал корпусу" description={colourMaterialFinish?.finishing}/>
                    </ListAccordion>

                    <ListAccordion
                        title="Функції"
                        left={props => <List.Icon {...props} icon="coffee"/>}>
                        <ListItem title="Гарячі кавові напої"
                                  description={useStringCreator(functions?.hotCoffeeDrinks)}/>
                        {functions?.hotMilkDrinks && <ListItem title="Гарячі молочні напої"
                                                               description={useStringCreator(functions.hotMilkDrinks)}/>}
                        {functions?.coldCoffeeDrinks && <ListItem title="Холодні кавові напої"
                                                                  description={useStringCreator(functions.coldCoffeeDrinks)}/>}
                        {functions?.coldMilkDrinks && <ListItem title="Холодні молочні напої"
                                                                description={useStringCreator(functions.coldMilkDrinks)}/>}
                        <ListItem title="Інші напої" description={useStringCreator(functions?.otherDrinks)}/>
                        <ListItem title="Загальна кількість напоїв" description={functions?.totalCountOfDrinks}/>
                        <ListItem title="Можливість персоналізувати аромат"
                                  description={useConvertBooleanToString(functions?.aromaFunction)}/>
                        <ListItem title="Можливість персоналізувати об'єм"
                                  description={useConvertBooleanToString(functions?.possibilityToCustomiseLength)}/>
                        {functions?.advancedPersonalisation && <ListItem title="Розширена персоналізація"
                                                                         description={functions.advancedPersonalisation}/>}
                        {functions?.abilityToCreateYourOwnDrinks && <ListItem title="Можливість створювати власні напої"
                                                                              description={functions.abilityToCreateYourOwnDrinks}/>}
                    </ListAccordion>

                    <ListAccordion
                        title="Панель управління"
                        left={props => <List.Icon {...props} icon="monitor-dashboard"/>}>
                        <ListItem title="Елементи управління" description={controlPanel?.controls}/>
                        {controlPanel?.display && <ListItem title="Дисплей" description={controlPanel.display}/>}
                        {controlPanel?.connectivity &&
                            <ListItem title="Підключення" description={controlPanel.connectivity}/>}
                    </ListAccordion>

                    <ListAccordion
                        title="Особливості"
                        left={props => <List.Icon {...props} icon="coffee-maker-check"/>}>
                        <ListItem title="Молочна система" description={features?.milkSystem}/>
                        {features?.possibilityToFrothMilkManually &&
                            <ListItem title="Можливість спінювання молока вручну"
                                      description={useConvertBooleanToString(features.possibilityToFrothMilkManually)}/>}
                        {features?.beanAdapt && <ListItem title="Bean Adapt Technology"
                                                          description={useConvertBooleanToString(features.beanAdapt)}/>}
                        {features?.cupIllumination && <ListItem title="Підсвітка чашок"
                                                                description={useConvertBooleanToString(features.cupIllumination)}/>}
                        {features?.cupWarmer && <ListItem title="Підігрів чашок"
                                                          description={features.cupWarmer}/>}
                        <ListItem title="Піддон для чашок" description={features?.cupHolder}/>
                        <ListItem title="Twin Shot"
                                  description={useConvertBooleanToString(features?.twinShot)}/>
                        {features?.thermalMilkJug && <ListItem title="Термокарафа для молока"
                                                               description={useConvertBooleanToString(features.thermalMilkJug)}/>}
                    </ListAccordion>

                    <ListAccordion
                        title="Різне"
                        left={props => <List.Icon {...props} icon="text-box"/>}>
                        <ListItem title="Можливість використання фільтра для води"
                                  description={useConvertBooleanToString(miscellaneous?.possibilityToUseWaterFilter)}/>
                        <ListItem title="Програмування жорсткості води"
                                  description={useConvertBooleanToString(miscellaneous?.programmableWaterHardness)}/>
                        <ListItem title="Можливість використання меленої кави"
                                  description={useConvertBooleanToString(miscellaneous?.possibilityToUseGroundCoffee)}/>
                    </ListAccordion>
                </List.Section>
            </ScrollView>
        </WithSafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'italic',
    },
});