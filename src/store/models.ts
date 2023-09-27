import {
    AMERICANO, CAFFELATTE, CAPPUCCINO, CAPPUCCINO_MIX, CAPPUCCINO_PLUS, CHOCOLATE_MIX_CARAFE,
    COFFEE, COLD_COFFEE_MIX_CARAFE, COLD_MILK_FOAM_MIX_CARAFE,
    ColdCoffeeDrinksType,
    ColdMilkDrinksType, DOPPIO_PLUS, ESPRESSO, ESPRESSO_MACCHIATO, FLAT_WHITE, HOT_MILK, HOT_WATER,
    HotCoffeeDrinksType,
    HotMilkDrinksType, LATTE_MACCHIATO, LONG,
    OtherDrinksType, STEAM, TEA_FUNCTION,
} from './drinks';

class CoffeeMachine {
    public technicalData: {
        dimensions: string;
        weight: number;
        pumpPressure: number;
        beansContainerCapacity: number;
        waterContainerCapacity: number;
        coffeeGrinder: 'металева конічна' | 'металева плоскопараллельна';
        degreesOfGrinding: number;
        groundsContainerCapacity: number;
        energyClass: string;
        maxCupHeight: number;
        inputPower: number;
        ratedVoltageFrequency: string;
    };

    public colourMaterialFinish: {
        colour: string;
        finishing: string;
    };

    public functions: {
        hotCoffeeDrinks: HotCoffeeDrinksType;
        hotMilkDrinks: HotMilkDrinksType | null;
        coldCoffeeDrinks: ColdCoffeeDrinksType | null;
        coldMilkDrinks: ColdMilkDrinksType | null;
        otherDrinks: OtherDrinksType;
        aromaFunction: boolean;
        possibilityToCustomiseLength: boolean;
        advancedPersonalisation: string | null;
        abilityToCreateYourOwnDrinks: string | null;
    };

    public controlPanel: {
        controls: string;
        display: string | null;
        connectivity: string | null;
    };

    public features: {
        milkSystem: string;
        possibilityToFrothMilkManually: boolean;
        cupIllumination: boolean;
        cupWarmer: boolean;
        cupHolder: string;
        twinShot: boolean;
        thermalMilkJug: boolean;
    };

    public miscellaneous: {
        possibilityToUseWaterFilter: boolean;
        programmableWaterHardness: boolean;
        possibilityToUseGroundCoffee: boolean;
    };

    constructor(public model: string,
                public series: string,
                public imageUrl: string[],
                public videoId: string | null,
                public description: string,
                dimensions: string,
                weight: number,
                pumpPressure: number,
                beansContainerCapacity: number,
                waterContainerCapacity: number,
                coffeeGrinder: 'металева конічна' | 'металева плоскопараллельна',
                degreesOfGrinding: number,
                groundsContainerCapacity: number,
                energyClass: string,
                maxCupHeight: number,
                colour: string,
                finishing: string,
                hotCoffeeDrinks: HotCoffeeDrinksType,
                hotMilkDrinks: HotMilkDrinksType,
                coldCoffeeDrinks: ColdCoffeeDrinksType | null,
                coldMilkDrinks: ColdMilkDrinksType | null,
                otherDrinks: OtherDrinksType,
                advancedPersonalisation: string | null,
                abilityToCreateYourOwnDrinks: string | null,
                controls: string,
                display: string | null,
                connectivity: string | null,
                milkSystem: string,
                possibilityToFrothMilkManually: boolean,
                cupIllumination: boolean,
                cupWarmer: boolean,
                cupHolder: string,
                thermalMilkJug: boolean) {
        this.technicalData = {
            dimensions,
            weight,
            pumpPressure,
            beansContainerCapacity,
            waterContainerCapacity,
            coffeeGrinder,
            degreesOfGrinding,
            groundsContainerCapacity,
            energyClass,
            maxCupHeight,
            inputPower: 1450,
            ratedVoltageFrequency: '220-240 V / 50-60 Hz',
        };

        this.colourMaterialFinish = {
            colour,
            finishing,
        };

        this.functions = {
            hotCoffeeDrinks,
            hotMilkDrinks,
            coldCoffeeDrinks,
            coldMilkDrinks,
            otherDrinks,
            aromaFunction: true,
            possibilityToCustomiseLength: true,
            advancedPersonalisation,
            abilityToCreateYourOwnDrinks,
        };

        this.controlPanel = {
            controls,
            display,
            connectivity,
        };

        this.features = {
            milkSystem,
            possibilityToFrothMilkManually,
            cupIllumination,
            cupWarmer,
            cupHolder,
            twinShot: true,
            thermalMilkJug,
        };

        this.miscellaneous = {
            possibilityToUseWaterFilter: true,
            programmableWaterHardness: true,
            possibilityToUseGroundCoffee: true,
        };
    }
}

const ecam650_85 = new CoffeeMachine('ECAM650.85.MS',
    'PrimaDonna Elite Experience',
    ['https://dam.delonghi.com/902x902/assets/84298', 'https://dam.delonghi.com/902x902/assets/186070', 'https://dam.delonghi.com/902x902/assets/84323', 'https://dam.delonghi.com/902x902/assets/95788'],
    'E3FpR6UzruA',
    'Підніміть приготування кави на новий рівень з PrimaDonna Elite Experience. Витончена обробка з нержавіючої сталі та яскравий сенсорний екран перш за все привернуть вашу увагу, а потім - її інноваційні функції. Підключіться через Bluetooth із додатком Coffee Link, щоб створювати й персоналізувати нові рецепти. Виберіть із широкого асортименту напоїв, щоб насолодитися улюбленою кавою вдома.',
    '260 x 375 x 470',
    12.4,
    19,
    400,
    2,
    'металева конічна',
    13,
    14,
    'Better than A',
    142,
    'Металево-сріблястий',
    'Суцільно-металеве',
    [ESPRESSO, COFFEE, LONG, DOPPIO_PLUS, AMERICANO],
    [CAPPUCCINO, LATTE_MACCHIATO, CAPPUCCINO_PLUS, CAPPUCCINO_MIX, HOT_MILK, CAFFELATTE, FLAT_WHITE, ESPRESSO_MACCHIATO],
    null,
    null,
    [CHOCOLATE_MIX_CARAFE, COLD_COFFEE_MIX_CARAFE, COLD_MILK_FOAM_MIX_CARAFE, TEA_FUNCTION, HOT_WATER, STEAM],
    '6 профілів користувача',
    'Так, через додаток',
    'Сенсорний дисплей',
    'кольоровий 4,3" TFT',
    'Coffee Link App',
    'LatteCrema Hot Technology',
    true,
    true,
    true,
    'Zamac',
    true);
