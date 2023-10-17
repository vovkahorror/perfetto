import {ScrollView, StyleSheet, Text} from 'react-native';
import {CurrentModelProps} from '../../types/NavigationTypes';
import {WithSafeAreaProvider} from '../../utils/hoc/WithSafeAreaProvider';
import {List} from 'react-native-paper';
import {ListItem} from '../../utils/hoc/ListItem';
import {useStringCreator} from '../../utils/custom-hooks/useStringCreator';
import {useConvertBooleanToString} from '../../utils/custom-hooks/useConvertBooleanToString';

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

    return (
        <WithSafeAreaProvider>
            <ScrollView>
                <Text>{model}</Text>
                <Text>{series}</Text>
                <Text>{description}</Text>

                <List.Section title="Характеристики" titleStyle={styles.listTitle}>
                    <List.Accordion
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
                    </List.Accordion>

                    <List.Accordion
                        title="Колір, матеріал, оздоблення"
                        left={props => <List.Icon {...props} icon="palette"/>}>
                        <ListItem title="Колір" description={colourMaterialFinish?.colour}/>
                        <ListItem title="Матеріал корпусу" description={colourMaterialFinish?.finishing}/>
                    </List.Accordion>

                    <List.Accordion
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
                    </List.Accordion>

                    <List.Accordion
                        title="Панель управління"
                        left={props => <List.Icon {...props} icon="monitor-dashboard"/>}>
                        <ListItem title="Елементи управління" description={controlPanel?.controls}/>
                        {controlPanel?.display && <ListItem title="Дисплей" description={controlPanel.display}/>}
                        {controlPanel?.connectivity &&
                            <ListItem title="Підключення" description={controlPanel.connectivity}/>}
                    </List.Accordion>

                    <List.Accordion
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
                    </List.Accordion>

                    <List.Accordion
                        title="Різне"
                        left={props => <List.Icon {...props} icon="text-box"/>}>
                        <ListItem title="Можливість використання фільтра для води"
                                  description={useConvertBooleanToString(miscellaneous?.possibilityToUseWaterFilter)}/>
                        <ListItem title="Програмування жорсткості води"
                                  description={useConvertBooleanToString(miscellaneous?.programmableWaterHardness)}/>
                        <ListItem title="Можливість використання меленої кави"
                                  description={useConvertBooleanToString(miscellaneous?.possibilityToUseGroundCoffee)}/>
                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </WithSafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    listTitle: {
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'italic',
    },
});