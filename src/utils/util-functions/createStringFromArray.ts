import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    OtherDrinksType,
} from '../../store/data/drinks';

export const createStringFromArray = (arr?: StringCreatorArgType) => {
    return arr?.reduce((acc, val, ind) => {
        return ind === arr.length - 1 ? acc + val : acc + val + ', ';
    }, '');
};

type StringCreatorArgType =
    HotCoffeeDrinksType
    | HotMilkDrinksType
    | ColdCoffeeDrinksType
    | ColdMilkDrinksType
    | OtherDrinksType
    | string[]
    | null;