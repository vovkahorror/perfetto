import {
    AMERICANO,
    CAFFELATTE,
    CAPPUCCINO,
    CAPPUCCINO_MIX,
    CAPPUCCINO_PLUS,
    CHOCOLATE_MIX_CARAFE,
    COFFEE,
    COFFEE_POT,
    COLD_COFFEE_MIX_CARAFE,
    COLD_MILK_FOAM_MIX_CARAFE,
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    DOPPIO_PLUS,
    ESPRESSO,
    ESPRESSO_LUNGO,
    ESPRESSO_MACCHIATO,
    FLAT_WHITE,
    HOT_MILK,
    HOT_WATER,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    LATTE_MACCHIATO,
    LONG,
    OtherDrinksType,
    STEAM,
    TEA_FUNCTION,
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
        totalCountOfDrinks: number;
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
        cupWarmer: 'активний' | 'пасивний' | null;
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
                public description: string | null,
                public summary: string[],
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
                hotMilkDrinks: HotMilkDrinksType | null,
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
                cupWarmer: 'активний' | 'пасивний' | null,
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
            totalCountOfDrinks: hotCoffeeDrinks.length + (hotMilkDrinks ? hotMilkDrinks.length : 0) + (coldCoffeeDrinks ? coldCoffeeDrinks.length : 0) + (coldMilkDrinks ? coldMilkDrinks.length : 0) + otherDrinks.length,
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
    ['Напої на основі кави та молока одним дотиком', 'Приготування 2 чашок еспресо одночасно', 'Кремова, щільна, стійка молочна піна ідеальної температури за допомогою автоматичної системи LatteCrema System. Карафа для молока з автоматичним очищенням', 'Керуйте профілями, створюйте та налаштовуйте нові рецепти за допомогою дисплея та додатка Coffee Link', 'Корпус із нержавіючої сталі та кольоровий сенсорний дисплей'],
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
    'Суцільно-металевий',
    [ESPRESSO, COFFEE, LONG, DOPPIO_PLUS, AMERICANO],
    [CAPPUCCINO, LATTE_MACCHIATO, CAPPUCCINO_PLUS, CAPPUCCINO_MIX, HOT_MILK, CAFFELATTE, FLAT_WHITE, ESPRESSO_MACCHIATO],
    null,
    null,
    [CHOCOLATE_MIX_CARAFE, COLD_COFFEE_MIX_CARAFE, COLD_MILK_FOAM_MIX_CARAFE, TEA_FUNCTION, HOT_WATER, STEAM],
    '6 профілів користувача + гостьовий профіль',
    'Так, через додаток',
    'Сенсорний дисплей',
    'кольоровий 4,3" TFT',
    'Coffee Link App',
    'LatteCrema Hot Technology',
    true,
    true,
    'активний',
    'Zamac',
    true);

const ecam370_95 = new CoffeeMachine('ECAM370.95.T',
    'Dinamica Plus',
    ['https://dam.delonghi.com/902x902/assets/118864', 'https://dam.delonghi.com/902x902/assets/118841', 'https://dam.delonghi.com/902x902/assets/118871'],
    'iiXqD1Evr3w',
    'Обирайте з 12 рецептів і насолоджуйтесь смачним напоєм за допомогою автоматичної кавомашини Dinamica Plus. Цей незабутній кавовий досвід покращується унікальними інтерактивними функціями, включаючи Smart One Touch, 3 профілі користувачів і додаток Coffee Link для безмежної персоналізації. Ця кавомашина преміум-класу є обов’язковою на будь-якій сучасній кухні.',
    ['Напої на основі кави та молока одним дотиком', 'Приготування 2 чашок еспресо одночасно', 'Кремова, щільна, стійка молочна піна ідеальної температури за допомогою автоматичної системи LatteCrema System. Карафа для молока з автоматичним очищенням', 'Керуйте профілями, створюйте та налаштовуйте нові рецепти за допомогою дисплея та додатка Coffee Link', 'Преміальний титановий колір та 3,5-дюймовий сенсорний дисплей'],
    '236 x 429 x 348',
    9.5,
    19,
    300,
    1.8,
    'металева конічна',
    13,
    14,
    'Better than A',
    135,
    'Титановий',
    'Пофарбований пластик',
    [ESPRESSO, COFFEE, LONG, DOPPIO_PLUS, COFFEE_POT],
    [CAPPUCCINO, LATTE_MACCHIATO, CAPPUCCINO_PLUS, CAPPUCCINO_MIX, HOT_MILK, CAFFELATTE, FLAT_WHITE, ESPRESSO_MACCHIATO],
    null,
    null,
    [HOT_WATER],
    '3 профілів користувача + гостьовий профіль',
    'Так, через додаток',
    'Сенсорний дисплей',
    'кольоровий 3,5" TFT',
    'Coffee Link App',
    'LatteCrema Hot Technology',
    false,
    false,
    'пасивний',
    'Нержавіюча сталь',
    true);

const ecam370_70 = new CoffeeMachine('ECAM370.70.B',
    'Dinamica Plus',
    ['https://dam.delonghi.com/902x902/assets/219345', 'https://dam.delonghi.com/902x902/assets/125041', 'https://dam.delonghi.com/902x902/assets/186030', 'https://dam.delonghi.com/902x902/assets/192114', 'https://dam.delonghi.com/902x902/assets/219347'],
    'tjgYo4OD1rc',
    'Обирайте з 12 рецептів і насолоджуйтесь смачним напоєм за допомогою автоматичної кавомашини Dinamica Plus. Цей незабутній кавовий досвід покращується унікальними інтерактивними функціями, зокрема Smart One Touch для безмежної персоналізації. Елегантне чорне покриття неодмінно приверне вашу увагу.',
    ['Напої на основі кави та молока одним дотиком', 'Приготування 2 чашок еспресо одночасно', 'Кремова, щільна, стійка молочна піна ідеальної температури за допомогою автоматичної системи LatteCrema System. Карафа для молока з автоматичним очищенням', 'Елегантний чорний колір та 3,5-дюймовий сенсорний дисплей'],
    '236 x 429 x 348',
    9.5,
    19,
    300,
    1.8,
    'металева конічна',
    13,
    14,
    'Better than A',
    135,
    'Чорний',
    'Пластик',
    [ESPRESSO, COFFEE, LONG, DOPPIO_PLUS, COFFEE_POT],
    [CAPPUCCINO, LATTE_MACCHIATO, CAPPUCCINO_PLUS, CAPPUCCINO_MIX, HOT_MILK, CAFFELATTE, FLAT_WHITE, ESPRESSO_MACCHIATO],
    null,
    null,
    [HOT_WATER],
    'Функція "My"',
    null,
    'Сенсорний дисплей',
    'кольоровий 3,5" TFT',
    null,
    'LatteCrema Hot Technology',
    false,
    false,
    'пасивний',
    'Нержавіюча сталь',
    false);

const ecam22_112 = new CoffeeMachine('ECAM22.112.B',
    'Magnifica S',
    ['https://dam.delonghi.com/902x902/assets/223655', 'https://dam.delonghi.com/902x902/assets/148639', 'https://dam.delonghi.com/902x902/assets/148644', 'https://dam.delonghi.com/902x902/assets/71561'],
    'ol0PjrMxe6g',
    null,
    ['Напої на основі кави одним натисканням кнопки', 'Система Twin-Shot готує 2 чашки еспресо одночасно', 'Вершкова молочна піна зі спінювачем молока з ручним регулюванням', 'Можливість налаштування аромату та кількості напою', 'Чорний глянцевий корпус із сріблястою панеллю з кнопками з м\'яким натиском'],
    '230 x 430 x 340',
    9,
    15,
    250,
    1.8,
    'металева конічна',
    13,
    14,
    'Better than A',
    142,
    'Чорний',
    'Пластик',
    [ESPRESSO, ESPRESSO_LUNGO],
    null,
    null,
    null,
    [HOT_WATER, STEAM],
    null,
    null,
    'Кнопки',
    null,
    null,
    'Cappuccino System',
    true,
    false,
    'пасивний',
    'Нержавіюча сталь',
    false);

const ecam220_21 = new CoffeeMachine('ECAM220.21.B',
    'Magnifica Start',
    ['https://dam.delonghi.com/902x902/assets/246474', 'https://dam.delonghi.com/902x902/assets/218782', 'https://dam.delonghi.com/902x902/assets/236105', 'https://dam.delonghi.com/902x902/assets/244958', 'https://dam.delonghi.com/902x902/assets/246464', 'https://dam.delonghi.com/902x902/assets/244943'],
    'P6eZ5NceqGA',
    'Пориньте у світ кави у зернах разом із De\'Longhi Magnifica Start, що надає все необхідне для приготування улюблених напоїв на основі еспресо вдома. Вона має привабливу гладку чорну поверхню та оснащена зручним інтерфейсом з індивідуальним вибором напоїв, для приготування яких достатньо одного дотику.',
    ['Насолоджуйтесь улюбленими кавовими напоями зі свіжозмелених зерен', 'Можливість ручного приготування вершкової молочної піни за допомогою традиційного спінювача молока', 'Можливість вибирати з 4 рецептів одним дотиком: пара, еспресо, кава та доппіо+', 'Персоналізація аромату та температури напою', 'Знімні компоненти, які можна мити в посудомийній машині, для легкого догляду'],
    '240 x 440 x 350',
    8.8,
    15,
    250,
    1.8,
    'металева конічна',
    13,
    14,
    'A',
    140,
    'Чорний',
    'Пластик',
    [ESPRESSO, COFFEE, DOPPIO_PLUS],
    null,
    null,
    null,
    [HOT_WATER, STEAM],
    null,
    null,
    'Сенсорні кнопки',
    null,
    null,
    'Cappuccino System',
    true,
    false,
    'пасивний',
    'Нержавіюча сталь',
    false);