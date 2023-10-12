export const ESPRESSO = 'Espresso';
export const ESPRESSO_LUNGO = 'Espresso Lungo';
export const RISTRETTO = 'Ristretto';
export const COFFEE = 'Coffee';
export const LONG = 'Long';
export const DOPPIO_PLUS = 'Doppio+';
export const AMERICANO = 'Americano';
export const COFFEE_POT = 'Coffee Pot';
export const OVER_ICE = 'Over Ice';
export const LONG_BLACK = 'Long Black';
export const CAPPUCCINO = 'Cappuccino';
export const TWO_CAPPUCCINO = `2x ${CAPPUCCINO}`;
export const LATTE_MACCHIATO = 'Latte Macchiato';
export const TWO_LATTE_MACCHIATO = `2x ${LATTE_MACCHIATO}`;
export const CAPPUCCINO_PLUS = 'Cappuccino+';
export const CAPPUCCINO_MIX = 'Cappuccino Mix';
export const TWO_CAPPUCCINO_MIX = `2x ${CAPPUCCINO_MIX}`;
export const HOT_MILK = 'Hot Milk';
export const CAFFELATTE = 'Caffelatte';
export const FLAT_WHITE = 'Flat White';
export const CORTADO = 'Cortado';
export const ESPRESSO_MACCHIATO = 'Espresso Macchiato';
export const MY_LATTE = 'MyLatte';
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
export const COLD_BREW_LATTE = 'Cold Brew Latte';
export const COLD_BREW_CAPPUCCINO = 'Cold Brew Cappuccino';
export const CHOCOLATE_MIX_CARAFE = 'Chocolate (Mix Carafe)';
export const COLD_COFFEE_MIX_CARAFE = 'Cold Coffee (Mix Carafe)';
export const COLD_MILK_FOAM_MIX_CARAFE = 'Cold milk foam (Mix Carafe)';
export const TEA_FUNCTION = 'Tea Function';
export const HOT_WATER = 'Hot Water';
export const STEAM = 'Steam';
export const MUG_TO_GO = 'Mug To Go';

export type HotCoffeeDrinksType = Array<
    typeof ESPRESSO
    | typeof ESPRESSO_LUNGO
    | typeof RISTRETTO
    | typeof COFFEE
    | typeof LONG
    | typeof DOPPIO_PLUS
    | typeof AMERICANO
    | typeof OVER_ICE
    | typeof LONG_BLACK
    | typeof COFFEE_POT>;

export type HotMilkDrinksType = Array<
    typeof CAPPUCCINO
    | typeof TWO_CAPPUCCINO
    | typeof LATTE_MACCHIATO
    | typeof TWO_LATTE_MACCHIATO
    | typeof CAPPUCCINO_PLUS
    | typeof CAPPUCCINO_MIX
    | typeof TWO_CAPPUCCINO_MIX
    | typeof HOT_MILK
    | typeof CAFFELATTE
    | typeof FLAT_WHITE
    | typeof CORTADO
    | typeof ESPRESSO_MACCHIATO
    | typeof MY_LATTE>;

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
    | typeof FOAMED_MILK
    | typeof COLD_BREW_LATTE
    | typeof COLD_BREW_CAPPUCCINO>;

export type OtherDrinksType = Array<
    typeof CHOCOLATE_MIX_CARAFE
    | typeof COLD_COFFEE_MIX_CARAFE
    | typeof COLD_MILK_FOAM_MIX_CARAFE
    | typeof TEA_FUNCTION
    | typeof HOT_WATER
    | typeof STEAM
    | typeof MUG_TO_GO>;
