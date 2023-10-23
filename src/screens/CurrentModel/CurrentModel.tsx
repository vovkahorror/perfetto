import {ImageSourcePropType, LayoutChangeEvent, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CurrentModelProps} from '../../types/NavigationTypes';
import {WithSafeAreaProvider} from '../../utils/hoc/WithSafeAreaProvider';
import {List} from 'react-native-paper';
import {ListItem} from '../../utils/hoc/ListItem';
import {useStringCreator} from '../../utils/custom-hooks/useStringCreator';
import {useConvertBooleanToString} from '../../utils/custom-hooks/useConvertBooleanToString';
import {ListAccordion} from '../../utils/hoc/ListAccordion';
import YoutubePlayer, {PLAYER_STATES} from 'react-native-youtube-iframe';
import {useCallback, useState} from 'react';
import {PADDING_HORIZONTAL, PADDING_VERTICAL, TEXT_COLOR} from '../../constants/constants';
import {ImageSlider} from 'react-native-image-slider-banner';
import * as ScreenOrientation from 'expo-screen-orientation';

export const CurrentModel = ({route}: CurrentModelProps) => {
    const {
        model,
        series,
        imageUrls,
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

    const mappedSummary = summary?.map((el) => {
        return <List.Item title={el} titleStyle={{fontSize: 14, color: TEXT_COLOR}} titleNumberOfLines={10}
                          style={styles.summaryItem} left={() => <List.Icon icon="check" color={TEXT_COLOR}/>}/>;
    });

    const handleLayout = useCallback((event: LayoutChangeEvent) => {
        const {width} = event.nativeEvent.layout;
        setViewWidth(width);
    }, []);

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
        <WithSafeAreaProvider>
            <ScrollView onLayout={handleLayout} contentContainerStyle={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.model}>{model}</Text>
                    <Text style={styles.series}>{series}</Text>
                </View>

                <View style={styles.mediaWrapper}>
                    {imageUrls && <ImageSlider
                        data={imageUrls?.map((el) => ({img: el as ImageSourcePropType}))}
                        autoPlay={false}
                        closeIconColor="#082141"
                        showHeader
                        previewImageStyle={{borderRadius: 10}}
                        caroselImageContainerStyle={{height: viewWidth}}
                        caroselImageStyle={{height: '100%', borderRadius: 10}}
                        indicatorContainerStyle={{bottom: 0}}
                        activeIndicatorStyle={{backgroundColor: TEXT_COLOR}}
                    />}
                </View>

                <Text style={styles.description}>{description}</Text>

                <List.Section title="Резюме" titleStyle={styles.listTitle}>
                    {mappedSummary}
                </List.Section>

                <View style={styles.mediaWrapper}>
                    <YoutubePlayer
                        height={(viewWidth - (PADDING_HORIZONTAL * 2)) / (16 / 9)}
                        play={playing}
                        videoId={videoId}
                        onChangeState={onStateChange}
                        onFullScreenChange={setOrientation}
                        webViewStyle={{opacity: 0.99}}
                    />
                </View>

                <List.Section title="Характеристики" titleStyle={styles.listTitle}>
                    <ListAccordion
                        title="Технічні дані"
                        icon="ruler">
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
                        icon="palette">
                        <ListItem title="Колір" description={colourMaterialFinish?.colour}/>
                        <ListItem title="Матеріал корпусу" description={colourMaterialFinish?.finishing}/>
                    </ListAccordion>

                    <ListAccordion
                        title="Функції"
                        icon="coffee">
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
                        icon="monitor-dashboard">
                        <ListItem title="Елементи управління" description={controlPanel?.controls}/>
                        {controlPanel?.display && <ListItem title="Дисплей" description={controlPanel.display}/>}
                        {controlPanel?.connectivity &&
                            <ListItem title="Підключення" description={controlPanel.connectivity}/>}
                    </ListAccordion>

                    <ListAccordion
                        title="Особливості"
                        icon="coffee-maker-check">
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
                        {features?.thermalMilkJug && <ListItem title="Термокарафка для молока"
                                                               description={useConvertBooleanToString(features.thermalMilkJug)}/>}
                    </ListAccordion>

                    <ListAccordion
                        title="Різне"
                        icon="text-box">
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
        gap: 10,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        backgroundColor: 'rgba(85, 66, 61, 0.8)',
    },
    titleContainer: {
        alignItems: 'center',
    },
    model: {
        fontSize: 24,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    series: {
        fontSize: 18,
        fontStyle: 'italic',
        color: TEXT_COLOR,
    },
    mediaWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    description: {
        fontSize: 16,
        color: TEXT_COLOR,
        fontStyle: 'italic',
    },
    listTitle: {
        paddingVertical: 0,
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'italic',
        color: TEXT_COLOR,
    },
    summaryItem: {
        paddingVertical: 0,
        paddingHorizontal: 10,
    },
});