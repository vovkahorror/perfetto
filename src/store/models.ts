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

    constructor(public model: string,
                public series: string,
                dimensions: string,
                weight: number,
                pumpPressure: number,
                beansContainerCapacity: number,
                waterContainerCapacity: number,
                groundsContainerCapacity: number,
                energyClass: string,
                maxCupHeight: number) {
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
    }
}