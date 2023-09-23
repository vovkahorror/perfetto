export const ESPRESSO = 'Espresso';
export const COFFEE = 'Coffee';
export const LONG = 'Long';
export const DOPPIO_PLUS = 'Doppio+';
export const AMERICANO = 'Americano';
export const CAPPUCCINO = 'Cappuccino';
export const LATTE_MACCHIATO = 'Latte Macchiato';
export const CAPPUCCINO_PLUS = 'Cappuccino+';
export const CAPPUCCINO_MIX = 'Cappuccino Mix';
export const HOT_MILK = 'Hot Milk';
export const CAFFELATTE = 'Caffelatte';
export const FLAT_WHITE = 'Flat White';
export const ESPRESSO_MACCHIATO = 'Espresso Macchiato';
export const CHOCOLATE_MIX_CARAFE = 'Chocolate (Mix Carafe)';
export const COLD_COFFEE_MIX_CARAFE = 'Cold Coffee (Mix Carafe)';
export const COLD_MILK_FOAM_MIX_CARAFE = 'Cold milk foam (Mix Carafe)';
export const TEA_FUNCTION = 'Tea Function';
export const HOT_WATER = 'Hot Water';
export const STEAM = 'Steam';

export type DrinksType = Array<
    typeof ESPRESSO
    | typeof COFFEE
    | typeof LONG
    | typeof DOPPIO_PLUS
    | typeof AMERICANO
    | typeof CAPPUCCINO
    | typeof LATTE_MACCHIATO
    | typeof CAPPUCCINO_PLUS
    | typeof CAPPUCCINO_MIX
    | typeof HOT_MILK
    | typeof CAFFELATTE
    | typeof FLAT_WHITE
    | typeof ESPRESSO_MACCHIATO
    | typeof CHOCOLATE_MIX_CARAFE
    | typeof COLD_COFFEE_MIX_CARAFE
    | typeof COLD_MILK_FOAM_MIX_CARAFE
    | typeof TEA_FUNCTION
    | typeof HOT_WATER
    | typeof STEAM>;