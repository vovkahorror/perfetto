export const ESPRESSO = 'Espresso';
export const ESPRESSO_LUNGO = 'Espresso Lungo';
export const COFFEE = 'Coffee';
export const LONG = 'Long';
export const DOPPIO_PLUS = 'Doppio+';
export const AMERICANO = 'Americano';
export const COFFEE_POT = 'Coffee Pot';
export const CAPPUCCINO = 'Cappuccino';
export const LATTE_MACCHIATO = 'Latte Macchiato';
export const CAPPUCCINO_PLUS = 'Cappuccino+';
export const CAPPUCCINO_MIX = 'Cappuccino Mix';
export const HOT_MILK = 'Hot Milk';
export const CAFFELATTE = 'Caffelatte';
export const FLAT_WHITE = 'Flat White';
export const ESPRESSO_MACCHIATO = 'Espresso Macchiato';
export const COLD_AMERICANO = 'Cold Americano';
export const COLD_COFFEE = 'Cold Coffee';
export const COLD_ESPRESSO = 'Cold Espresso';
export const COLD_BREW = 'Cold Brew';
export const COLD_BREW_TO_MIX = 'Cold Brew to Mix';
export const COLD_BREW_POT = 'Cold Brew Pot';
export const COLD_CAPPUCCINO = 'Cold Cappuccino';
export const COLD_CAPPUCCINO_MIX = 'Cold Cappuccino Mix';
export const COLD_LATTE_MACCHIATO = 'Cold Latte Macchiato';
export const COLD_CAFFELATTE = 'Cold CaffeLatte';
export const COLD_MILK = 'Cold Milk';
export const COLD_FLAT_WHITE = 'Cold Flat White';
export const FOAMED_MILK = 'Foamed Milk';
export const CHOCOLATE_MIX_CARAFE = 'Chocolate (Mix Carafe)';
export const COLD_COFFEE_MIX_CARAFE = 'Cold Coffee (Mix Carafe)';
export const COLD_MILK_FOAM_MIX_CARAFE = 'Cold milk foam (Mix Carafe)';
export const TEA_FUNCTION = 'Tea Function';
export const HOT_WATER = 'Hot Water';
export const STEAM = 'Steam';

export type HotCoffeeDrinksType = Array<
    typeof ESPRESSO
    | typeof ESPRESSO_LUNGO
    | typeof COFFEE
    | typeof LONG
    | typeof DOPPIO_PLUS
    | typeof AMERICANO
    | typeof COFFEE_POT>;

export type HotMilkDrinksType = Array<
    typeof CAPPUCCINO
    | typeof LATTE_MACCHIATO
    | typeof CAPPUCCINO_PLUS
    | typeof CAPPUCCINO_MIX
    | typeof HOT_MILK
    | typeof CAFFELATTE
    | typeof FLAT_WHITE
    | typeof ESPRESSO_MACCHIATO>;

export type ColdCoffeeDrinksType = Array<
    typeof COLD_AMERICANO
    | typeof COLD_COFFEE
    | typeof COLD_ESPRESSO
    | typeof COLD_BREW
    | typeof COLD_BREW_TO_MIX
    | typeof COLD_BREW_POT>;

export type ColdMilkDrinksType = Array<
    typeof COLD_CAPPUCCINO
    | typeof COLD_CAPPUCCINO_MIX
    | typeof COLD_LATTE_MACCHIATO
    | typeof COLD_CAFFELATTE
    | typeof COLD_MILK
    | typeof COLD_FLAT_WHITE
    | typeof FOAMED_MILK>;

export type OtherDrinksType = Array<
    typeof CHOCOLATE_MIX_CARAFE
    | typeof COLD_COFFEE_MIX_CARAFE
    | typeof COLD_MILK_FOAM_MIX_CARAFE
    | typeof TEA_FUNCTION
    | typeof HOT_WATER
    | typeof STEAM>;
