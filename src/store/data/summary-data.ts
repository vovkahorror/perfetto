import {
    ecam220_20,
    ecam220_21,
    ecam220_31,
    ecam220_60,
    ecam220_61,
    ecam220_80,
    ecam22_112,
    ecam250_23,
    ecam290_21,
    ecam290_31,
    ecam290_51,
    ecam290_81,
    ecam293_52,
    ecam320_60,
    ecam350_35sb,
    ecam350_35w,
    ecam350_50,
    ecam350_75,
    ecam353_75b,
    ecam353_75w,
    ecam359_55,
    ecam370_70,
    ecam370_95,
    ecam380_85,
    ecam380_95,
    ecam44_660,
    ecam450_65,
    ecam450_86,
    ecam610_55,
    ecam610_74,
    ecam610_75,
    ecam650_85,
    epam960_75,
} from './models';
import {
    AMERICANO,
    CAFE_AU_LAIT,
    CAFE_CON_LECHE,
    CAFFELATTE,
    CAPPUCCINO,
    CAPPUCCINO_MIX,
    CAPPUCCINO_PLUS,
    CHOCOLATE_MIX_CARAFE,
    COFFEE,
    COFFEE_POT,
    COLD_AMERICANO,
    COLD_BREW,
    COLD_BREW_CAPPUCCINO,
    COLD_BREW_LATTE,
    COLD_BREW_POT,
    COLD_BREW_TO_MIX,
    COLD_CAFFELATTE,
    COLD_CAPPUCCINO,
    COLD_CAPPUCCINO_MIX,
    COLD_COFFEE,
    COLD_COFFEE_MIX_CARAFE,
    COLD_ESPRESSO,
    COLD_FLAT_WHITE,
    COLD_LATTE_MACCHIATO,
    COLD_MILK,
    COLD_MILK_FOAM_MIX_CARAFE,
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    CORTADO,
    DOPPIO_PLUS,
    ESPRESSO,
    ESPRESSO_LUNGO,
    ESPRESSO_MACCHIATO,
    ESPRESSO_SOUL,
    FLAT_WHITE,
    GALAO,
    HOT_MILK,
    HOT_WATER,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    ICED_COFFEE,
    LATTE_MACCHIATO,
    LONG,
    LONG_BLACK,
    MUG_TO_GO,
    MY_LATTE,
    OtherDrinksType,
    OVER_ICE,
    RISTRETTO,
    STEAM_HOT_WATER,
    TEA_FUNCTION,
    TWO_CAPPUCCINO,
    TWO_CAPPUCCINO_MIX,
    TWO_LATTE_MACCHIATO,
    VERLANGERTER,
} from './drinks';
import {
    beanAdapt,
    brewingUnit,
    coffeeGrinder,
    coldExtraction,
    crf,
    latteCremaCool,
    latteCremaHot,
    mixCarafe,
    thermoblock,
    tubeless,
    twinShot,
} from './technologies';

export const allModels = [
    epam960_75,
    ecam650_85,
    ecam610_75,
    ecam610_74,
    ecam610_55,
    ecam450_86,
    ecam450_65,
    ecam44_660,
    ecam380_95,
    ecam380_85,
    ecam370_95,
    ecam370_70,
    ecam359_55,
    ecam353_75w,
    ecam353_75b,
    ecam350_75,
    ecam350_50,
    ecam350_35w,
    ecam350_35sb,
    ecam320_60,
    ecam293_52,
    ecam290_81,
    ecam290_51,
    ecam290_31,
    ecam290_21,
    ecam250_23,
    ecam220_80,
    ecam220_61,
    ecam220_60,
    ecam220_31,
    ecam220_21,
    ecam220_20,
    ecam22_112,
];

export const allDrinks: DrinksDataType = {
    hotCoffeeDrinks: [
        ESPRESSO,
        ESPRESSO_SOUL,
        ESPRESSO_LUNGO,
        RISTRETTO,
        COFFEE,
        LONG,
        DOPPIO_PLUS,
        AMERICANO,
        COFFEE_POT,
        LONG_BLACK,
        VERLANGERTER,
    ],
    hotMilkDrinks: [
        CAPPUCCINO,
        TWO_CAPPUCCINO,
        LATTE_MACCHIATO,
        TWO_LATTE_MACCHIATO,
        CAPPUCCINO_PLUS,
        CAPPUCCINO_MIX,
        TWO_CAPPUCCINO_MIX,
        CAFFELATTE,
        FLAT_WHITE,
        CORTADO,
        ESPRESSO_MACCHIATO,
        CAFE_AU_LAIT,
        GALAO,
        CAFE_CON_LECHE,
        HOT_MILK,
        MY_LATTE,
    ],
    coldCoffeeDrinks: [
        COLD_AMERICANO,
        COLD_COFFEE,
        COLD_ESPRESSO,
        COLD_BREW,
        COLD_BREW_TO_MIX,
        COLD_BREW_POT,
        COLD_COFFEE_MIX_CARAFE,
        OVER_ICE,
        ICED_COFFEE,
    ],
    coldMilkDrinks: [
        COLD_CAPPUCCINO,
        COLD_CAPPUCCINO_MIX,
        COLD_LATTE_MACCHIATO,
        COLD_CAFFELATTE,
        COLD_MILK,
        COLD_FLAT_WHITE,
        COLD_BREW_LATTE,
        COLD_BREW_CAPPUCCINO,
        COLD_MILK_FOAM_MIX_CARAFE,
    ],
    otherDrinks: [
        CHOCOLATE_MIX_CARAFE,
        TEA_FUNCTION,
        HOT_WATER,
        STEAM_HOT_WATER,
        MUG_TO_GO,
    ],
};

export const allTechnologies = [
    crf,
    tubeless,
    brewingUnit,
    thermoblock,
    coffeeGrinder,
    twinShot,
    latteCremaHot,
    latteCremaCool,
    beanAdapt,
    coldExtraction,
    mixCarafe,
];

export type DrinksDataType = {
    hotCoffeeDrinks: HotCoffeeDrinksType;
    hotMilkDrinks: HotMilkDrinksType | null;
    coldCoffeeDrinks: ColdCoffeeDrinksType | null;
    coldMilkDrinks: ColdMilkDrinksType | null;
    otherDrinks: OtherDrinksType;
};