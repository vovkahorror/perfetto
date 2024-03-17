import {
    ColdCoffeeDrinksType,
    ColdMilkDrinksType,
    HotCoffeeDrinksType,
    HotMilkDrinksType,
    OtherDrinksType,
} from '../../store/data/drinks';

export const createStringFromArray = (arr?: StringCreatorArgType) => {
    return arr?.reduce((acc, val, ind) => {
        return ind === arr.length - 1 ? acc + val.name : acc + val.name + ', ';
    }, '');
};

type StringCreatorArgType =
    HotCoffeeDrinksType
    | HotMilkDrinksType
    | ColdCoffeeDrinksType
    | ColdMilkDrinksType
    | OtherDrinksType;