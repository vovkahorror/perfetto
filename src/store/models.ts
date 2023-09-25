import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    OtherDrinksType,
} from './drinks';

class CoffeeMachine {
    public technicalData: {
        dimensions: string;
        weight: number;
        pumpPressure: number;
        beansContainerCapacity: number;
        waterContainerCapacity: number;
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

    constructor(public model: string,
                public series: string,
                dimensions: string,
                weight: number,
                pumpPressure: number,
                beansContainerCapacity: number,
                waterContainerCapacity: number,
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
    }
}