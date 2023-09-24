import {DrinksType} from './drinks';

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
        hotCoffeeDrinks: DrinksType;
        hotMilkDrinks: DrinksType | null;
        otherDrinks: DrinksType;
        aromaFunction: boolean;
        possibilityToCustomiseLength: boolean;
        advancedPersonalisation: string | null;
        abilityToCreateYourOwnDrinks: string | null;
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
                hotCoffeeDrinks: DrinksType,
                hotMilkDrinks: DrinksType,
                otherDrinks: DrinksType,
                advancedPersonalisation: string | null,
                abilityToCreateYourOwnDrinks: string | null) {
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
            otherDrinks,
            aromaFunction: true,
            possibilityToCustomiseLength: true,
            advancedPersonalisation,
            abilityToCreateYourOwnDrinks,
        };
    }
}