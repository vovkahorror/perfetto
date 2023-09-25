import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    OtherDrinksType,
} from './drinks';

class CoffeeMachine {
    private technicalData: {
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

    private colourMaterialFinish: {
        colour: string;
        finishing: string;
    };

    private functions: {
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

    private controlPanel: {
        controls: string;
        display: string | null;
        connectivity: string | null;
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
                connectivity: string | null) {
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
            connectivity
        };
    }
}