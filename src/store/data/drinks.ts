export class Drink {
    constructor(public name: string,
                public description: string,
                public imageUrl: string) {
    }
}

export class HotCoffeeDrink extends Drink {
    public data: {
        process: {
            general: {
                beanWeight: number | string;
                preWetting: boolean;
                coffee?: string;
                water?: string;
                pressure: string;
            }
        };
        result: {
            volume: string;
            appearance: string;
        };
    } | null;

    constructor(public name: string,
                public description: string,
                public imageUrl: string,
                data: {
                    beanWeight: number | string,
                    preWetting: boolean,
                    coffee?: string,
                    water?: string,
                    pressure: string,
                    volume: string,
                    appearance: string
                } | null) {
        super(name, description, imageUrl);

        this.data = data
            ? {
                process: {
                    general: {
                        beanWeight: data.beanWeight,
                        preWetting: data.preWetting,
                        coffee: data.coffee,
                        water: data.water,
                        pressure: data.pressure,
                    },
                },
                result: {
                    volume: data.volume,
                    appearance: data.appearance,
                },
            }
            : null;
    }
}

export const ESPRESSO = new HotCoffeeDrink('Espresso',
    'Справжній італійський рецепт. Збалансований та стійкий смак, із щільною пінкою крема горіхового кольору.',
    'https://www.dropbox.com/scl/fi/twbl205jfxdekdbresxlo/espresso.webp?rlkey=vugxe4wip7uvqob2uyqyw4qk8&dl=0&raw=1',
    {
        beanWeight: 10,
        preWetting: true,
        pressure: 'Високий (9-12 бар)',
        volume: '50 мл (40 г)',
        appearance: 'Напій невеликого об\'єму, пінка крема горіхового кольору',
    });

export const ESPRESSO_SOUL = new HotCoffeeDrink('Espresso Soul',
    'Експерт з кави у вас під рукою, що дозволяє вам оптимізувати екстракцію всього за кілька натискань у додатку.',
    'https://www.dropbox.com/scl/fi/twbl205jfxdekdbresxlo/espresso.webp?rlkey=vugxe4wip7uvqob2uyqyw4qk8&dl=0&raw=1',
    {
        beanWeight: 'Встановлюється технологією Bean Adapt',
        preWetting: true,
        pressure: 'Високий (9-12 бар)',
        volume: '50 мл (40 г)',
        appearance: 'Напій невеликого об\'єму, пінка крема горіхового кольору',
    });

export const ESPRESSO_LUNGO = new HotCoffeeDrink('Espresso Lungo',
    'Збільшена кількість автентичного еспресо.',
    'https://www.dropbox.com/scl/fi/r8w27ibrdi7guzzmu0vec/espresso-lungo.webp?rlkey=jfsqqmiknqmnqaiiy9k3ldbk1&dl=0&raw=1',
    {
        beanWeight: 9,
        preWetting: true,
        pressure: 'Високий (9-12 бар)',
        volume: '130 мл (120 г)',
        appearance: 'Збільшений об\'єм, пінка крема горіхового кольору',
    });

export const RISTRETTO = new HotCoffeeDrink('Ristretto',
    'Зменшена кількість автентичного еспресо.',
    'https://www.dropbox.com/scl/fi/sp0b17ij8tq20a8wsqg1k/ristretto.webp?rlkey=hzwahuu9r1lo95n3lfd1ioxkm&dl=0&raw=1',
    {
        beanWeight: 9,
        preWetting: true,
        pressure: 'Високий (9-12 бар)',
        volume: '35 мл (30 г)',
        appearance: 'Невелика кількість, пінка крема горіхового кольору',
    });

export const COFFEE = new HotCoffeeDrink('Coffee',
    'Більш об\'ємна та легка версія італійського еспресо зі збалансованим смаком та тонким шаром пінки крема.',
    'https://www.dropbox.com/scl/fi/4d6ed40mfhhlcyb7dha9s/coffee.webp?rlkey=mqgpim093kxc3fnuamiwayzsm&dl=0&raw=1',
    {
        beanWeight: 10,
        preWetting: false,
        pressure: 'Високий (9-12 бар)',
        volume: '200 мл (180 г)',
        appearance: 'Більш тонка крема та легкий смак еспресо',
    });

export const LONG = new HotCoffeeDrink('Long',
    'Спеціальний рецепт кави, готується за зниженого тиску при заварюванні для досягнення ніжного смаку.',
    'https://www.dropbox.com/scl/fi/wtbxuwkooeroninjt17if/long.webp?rlkey=tf22d96uux2gyomi8lfe6xes2&dl=0&raw=1',
    {
        beanWeight: '2 окремі цикли помелу по 7 г',
        preWetting: false,
        pressure: 'Більш низький тиск, ніж у еспресо. Імпульсний режим.',
        volume: '170 мл (160 г)',
        appearance: 'Більш тонка крема та легкий смак еспресо',
    });

export const DOPPIO_PLUS = new HotCoffeeDrink('Doppio+',
    'Більше ніж подвійний еспресо, готується з додатковою кількістю меленої кави і глибоким попереднім змочуванням для більшого аромату та енергії.',
    'https://www.dropbox.com/scl/fi/fqqtmgly915mlke5xc4cv/doppio.webp?rlkey=2ds7j7helxwzgntm4g5dwd9nr&dl=0&raw=1',
    {
        beanWeight: 14,
        preWetting: true,
        pressure: 'Високий',
        volume: '135 мл (120 г)',
        appearance: 'Пінка крема тонша і темніша, ніж у еспресо',
    });

export const AMERICANO = new HotCoffeeDrink('Americano',
    'Весь смак еспресо із додатковою порцією гарячої води для стійкого смаку.',
    'https://www.dropbox.com/scl/fi/ovon5wy2k79hmmm9oaayc/americano.webp?rlkey=0vzj17ome2ibxx8uni7omvplj&dl=0&raw=1',
    {
        beanWeight: 9,
        preWetting: true,
        coffee: '50 мл (40 г)',
        water: '110-160 мл',
        pressure: 'Високий (9-12 бар)',
        volume: '160-210 мл (150-200 г)',
        appearance: 'Майже немає пінки крема після додавання гарячої води',
    });

export const COFFEE_POT = new HotCoffeeDrink('Coffee Pot',
    'Одночасне приготування до 6 чашок, щоб розділити насолоду від ніжної кави з друзями та близькими. З тонким шаром пінки та стійким ніжним смаком.',
    'https://www.dropbox.com/scl/fi/p9zupy2ixka0woupkqyxd/coffee-pot.webp?rlkey=u78a250q3jxwvvl81l894o72e&dl=0&raw=1',
    {
        beanWeight: 'Від 2 до 6 помелів, залежно від кількості порцій та моделі кавомашини, 10 г',
        preWetting: false,
        pressure: 'Високий (9-12 бар)',
        volume: '250–750 мл',
        appearance: 'Величезна порція ароматної кави',
    });

export const LONG_BLACK = new HotCoffeeDrink('Long Black',
    'Подвійна порція еспресо, що подається просто у воду, щоб зберегти пінку і зробити смак більш інтенсивним.',
    'https://www.dropbox.com/scl/fi/7t8u6tqkx6medzz6d9tet/long-black.webp?rlkey=fp24geakuuq50t28behbr4ay4&dl=0&raw=1',
    {
        beanWeight: 12.5,
        preWetting: true,
        coffee: '90 мл (80 г)',
        water: '120 мл',
        pressure: 'Високий (9-12 бар)',
        volume: '210 мл (200 г)',
        appearance: 'Більш тонка крема та легкий смак еспресо',
    });

export const VERLANGERTER = new HotCoffeeDrink('Verlängerter',
    'Інтенсивність однієї порції еспресо освітлюється такою ж кількістю гарячої води.',
    'https://www.dropbox.com/scl/fi/8hyfal3juxq004zpmn6mg/verlangerter.webp?rlkey=ek9ciswdx86utdajujeiamjml&dl=0&raw=1',
    {
        beanWeight: 9,
        preWetting: true,
        coffee: '50 мл (40 г)',
        water: '40 мл',
        pressure: 'Високий (9-12 бар)',
        volume: '90 мл (80 г)',
        appearance: 'Зменшена пінка після додавання гарячої води',
    });

export class HotMilkDrink extends Drink {
    public data: {
        process: {
            general: {
                coffee?: string;
                milk: string;
                milkFoam: string;
                submission?: string;
            }
        };
        result: {
            volume: string;
            appearance: string;
        }
    } | null;

    constructor(public name: string,
                public description: string,
                public imageUrl: string,
                data: {
                    coffee?: string,
                    milk: string,
                    milkFoam: string,
                    submission?: string,
                    volume: string,
                    appearance: string
                } | null) {
        super(name, description, imageUrl);

        this.data = data
            ? {
                process: {
                    general: {
                        coffee: data.coffee,
                        milk: data.milk,
                        milkFoam: data.milkFoam,
                        submission: data.submission,
                    },
                },
                result: {
                    volume: data.volume,
                    appearance: data.appearance,
                },
            }
            : null;
    }
}

export const CAPPUCCINO = new HotMilkDrink('Cappuccino',
    'Одна порція еспресо, змішана з великою кількістю гарячого молока, з максимальним рівнем розкішної щільної піни.',
    'https://www.dropbox.com/scl/fi/8f9r6ie8sxt9nf6we59nj/cappuccino.webp?rlkey=70m7kw9u1iyz6xs0un704xtw5&dl=0&raw=1',
    {
        coffee: '65 мл (65 г)',
        milk: '165 мл (80 г)',
        milkFoam: 'Максимальний рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '230 мл (145 г)',
        appearance: 'Окремі шари піни, кави та молока, вкриті товстим шаром піни',
    });

export const TWO_CAPPUCCINO = new HotMilkDrink('2x Cappuccino',
    'Одночасне приготування двох капучино. Еспресо змішується з великою кількістю гарячого молока, з максимальним рівнем розкішної щільної піни.',
    'https://www.dropbox.com/scl/fi/peqg519o3k0e858q8hjw6/2x-cappuccino.webp?rlkey=6a3eu2yr25zsg6e809bff60hc&dl=0&raw=1',
    {
        coffee: '130 мл (130 г): по 65 мл (65 г) для кожної порції',
        milk: '330 мл (160 г): по 165 мл (80 г) для кожної порції',
        milkFoam: 'Максимальний рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '460 мл (290 г): по 230 мл (145 г) для кожної порції',
        appearance: 'Окремі шари піни, кави та молока, вкриті товстим шаром піни',
    });

export const LATTE_MACCHIATO = new HotMilkDrink('Latte Macchiato',
    'Одна порція еспресо, плюс майже вчетверо більша кількість гарячого молока із середнім рівнем піни.',
    'https://www.dropbox.com/scl/fi/8po9duxojqpbhdqtnogq3/latte-macchiato.webp?rlkey=mzqcbstk4as4m99ui3n3c7gsn&dl=0&raw=1',
    {
        coffee: '60 мл (60 г)',
        milk: '225 мл (140 г)',
        milkFoam: 'Середній рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '285 мл (200 г)',
        appearance: 'Окремі шари молока, еспресо та молочної піни',
    });

export const TWO_LATTE_MACCHIATO = new HotMilkDrink('2x Latte Macchiato',
    'Одночасне приготування двох лате-мак\'ято. Еспресо змішується з майже вчетверо більшою кількістю гарячого молока із середнім рівнем піни.',
    'https://www.dropbox.com/scl/fi/ldx11j2q9k0mkpcpw8ix5/2x-latte-macchiato.webp?rlkey=kq3rwl7hkqnut4luyajiut0w3&dl=0&raw=1',
    {
        coffee: '120 мл (120 г): по 60 мл (60 г) для кожної порції',
        milk: '450 мл (280 г): по 225 мл (140 г) для кожної порції',
        milkFoam: 'Середній рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '570 мл (400 г): по 285 мл (200 г) для кожної порції',
        appearance: 'Окремі шари молока, еспресо та молочної піни',
    });

export const CAPPUCCINO_PLUS = new HotMilkDrink('Cappuccino+',
    'Вершковий капучино, приготований на основі Doppio+ для додаткового аромату та додаткової енергії.',
    'https://www.dropbox.com/scl/fi/55f5pomq8jn0t6pk3dyz9/cappuccino-plus.webp?rlkey=b8b0zhcge3lbz9nvrm71a25oy&dl=0&raw=1',
    {
        coffee: '100 мл (100 г)',
        milk: '150 мл (70 г)',
        milkFoam: 'Максимальний рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '250 мл (170 г)',
        appearance: 'Темніше, ніж капучино, окремі шари піни, кави та молока',
    });

export const CAPPUCCINO_MIX = new HotMilkDrink('Cappuccino Mix',
    'В еспресо подається гаряче спінене молоко, що створює насичений кавовий смак всього напою.',
    'https://www.dropbox.com/scl/fi/jzncupzgvh91xjyispv76/cappuccino-mix.webp?rlkey=bwkrsmr3qlv3yzc5rgsmqk69i&dl=0&raw=1',
    {
        coffee: '65 мл (65 г)',
        milk: '165 мл (80 г)',
        milkFoam: 'Середній рівень',
        submission: 'Спершу кава, потім молоко',
        volume: '230 мл (145 г)',
        appearance: 'Рівномірно-коричневий, навіть пінка',
    });

export const TWO_CAPPUCCINO_MIX = new HotMilkDrink('2x Cappuccino Mix',
    'Одночасне приготування двох капучино-мікс. В еспресо подається гаряче спінене молоко, що створює насичений кавовий смак всього напою.',
    'https://www.dropbox.com/scl/fi/0ct0lhpj6m2y38pokpkub/2x-cappuccino-mix.webp?rlkey=u1mqyvoe3k4kwoeohwnudog9i&dl=0&raw=1',
    {
        coffee: '130 мл (130 г): по 65 мл (65 г) для кожної порції',
        milk: '330 мл (160 г): по 165 мл (80 г) для кожної порції',
        milkFoam: 'Середній рівень',
        submission: 'Спершу кава, потім молоко',
        volume: '460 мл (290 г): по 230 мл (145 г) для кожної порції',
        appearance: 'Рівномірно-коричневий, навіть пінка',
    });

export const HOT_MILK = new HotMilkDrink('Hot Milk',
    'Гаряче молоко подається із бажаним рівнем щільності піни. Чим нижчий рівень щільності піни, тим нижча температура напою.',
    'https://www.dropbox.com/scl/fi/thrk4c7fcdmxmnwp657x5/hot-milk.webp?rlkey=6ujq49wi1n0jzr1d10lx7okth&dl=0&raw=1',
    {
        milk: '370 мл (170 г)',
        milkFoam: 'Максимальний рівень (пропонований)',
        volume: '370 мл (170 г)',
        appearance: 'Гаряче спінене молоко',
    });

export const CAFFELATTE = new HotMilkDrink('Caffelatte',
    'Еспресо, змішаний із чотирма частинами гарячого молока, спіненого на мінімальному рівні.',
    'https://www.dropbox.com/scl/fi/12kgujkccqnm2pay2yf6g/caffeelatte.webp?rlkey=t0u6bcbvehsklwrf5d1unxxnz&dl=0&raw=1',
    {
        coffee: '60 мл (60 г)',
        milk: '230 мл (205 г)',
        milkFoam: 'Мінімальний рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '290 мл (265 г)',
        appearance: 'Великий кавово-молочний напій із невеликою шапкою молочної піни',
    });

export const FLAT_WHITE = new HotMilkDrink('Flat White',
    'Подвійний ристретто, змішаний із удвічі більшою кількістю молока та бархатистою піною середнього рівня щільності.',
    'https://www.dropbox.com/scl/fi/y40tq2t3pav97spcx7h9d/flat-white.webp?rlkey=5129vvmdjbo2cnvxmzczf5pde&dl=0&raw=1',
    {
        coffee: '60 мл (60 г)',
        milk: '160 мл (120 г)',
        milkFoam: 'Середній рівень',
        submission: 'Спершу кава, потім молоко',
        volume: '220 мл (180 г)',
        appearance: 'Еспресо з мікропінкою (спінене молоко з дрібними бульбашками та глянсовою, бархатистою консистенцією)',
    });

export const CORTADO = new HotMilkDrink('Cortado',
    'Еспресо, «розрізаний» із порцією гарячого молока, із середнім рівнем піни.',
    'https://www.dropbox.com/scl/fi/yvypnks04j3fi3y93mugm/cortado.webp?rlkey=gdlmycy0io82n8etjrztuwb7q&dl=0&raw=1',
    {
        coffee: '40 мл (40 г)',
        milk: '60 мл (27 г)',
        milkFoam: 'Середній рівень',
        submission: 'Спершу кава, потім молоко',
        volume: '100 мл (67 г)',
        appearance: 'Рівномірно-коричневий, еспресо, змішаний з невеликою кількістю гарячого молока та піною',
    });

export const ESPRESSO_MACCHIATO = new HotMilkDrink('Espresso Macchiato',
    'Одна порція еспресо і трішки гарячого молока з піною.',
    'https://www.dropbox.com/scl/fi/ekxognt4xa122am6vucg0/espresso-macchiato.webp?rlkey=2y50zm8p3ephn9c6zdnub8a2j&dl=0&raw=1',
    {
        coffee: '30 мл (30 г)',
        milk: '35 мл (20 г)',
        milkFoam: 'Максимальний рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '65 мл (50 г)',
        appearance: 'Еспресо, змішаний із краплею молока, сам напій світлішого кольору',
    });

export const MY_LATTE = new HotMilkDrink('My Latte',
    'Функція My Latte була створена, щоб дозволити вам налаштувати власний напій на свій смак, щоразу, коли ви забажаєте. З My Latte вся кількість молока в карафці буде пінитися в вашій чашці, до останньої краплі! Просто налийте в карафку свою улюблену кількість молока, щоб воно все спінилось, потім машина заварить еспресо, щоб завершити ваш ідеальний напій на основі молока.',
    'https://www.dropbox.com/scl/fi/pek6bhem8c6qabob1p87h/my-latte.webp?rlkey=rgk1dlvl2vcv4bl7g3y80leie&dl=0&raw=1',
    {
        coffee: '50 мл (40 г)',
        milk: 'Довільна кількість',
        milkFoam: 'Максимальний рівень',
        submission: 'Спершу молоко, потім кава',
        volume: 'Довільна кількість',
        appearance: 'Молочно-кавовий напій, приготований з довільною кількість молока',
    });

export const CAFE_AU_LAIT = new HotMilkDrink('Café au Lait',
    'Довгий еспресо з двома частинами спіненого молока з дуже тонким шаром піни.',
    'https://www.dropbox.com/scl/fi/wgjmauduxdoymkxhbdwsi/cafe-au-lait.webp?rlkey=x8216nzejqfacslmgszppxam3&dl=0&raw=1',
    {
        coffee: '60 мл (60 г)',
        milk: '130 мл (130 г)',
        milkFoam: 'Мінімальний рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '190 мл (190 г)',
        appearance: 'Кава обережно змішана з молоком, світлішого кольору',
    });

export const GALAO = new HotMilkDrink('Galão',
    'Еспресо з більш ніж подвійною кількістю спіненого молока із середнім шаром піни.',
    'https://www.dropbox.com/scl/fi/3spqkfwns4y3idzfqrkmu/galao.webp?rlkey=8stbs1bjcdpmxk2ud97khog8p&dl=0&raw=1',
    {
        coffee: '50 мл (50 г)',
        milk: '160 мл (100 г)',
        milkFoam: 'Середній рівень',
        submission: 'Спершу молоко, потім кава',
        volume: '210 мл (150 г)',
        appearance: 'Еспресо, змішаний з більш ніж подвійною кількістю спіненого молока, створює шар між кавою та молоком',
    });

export const CAFE_CON_LECHE = new HotMilkDrink('Café con Leche',
    'Подвійний еспресо з невеликою кількістю спіненого молока без піни.',
    'https://www.dropbox.com/scl/fi/n9sisw60z8bk2ci9at4fk/cafe-con-leche.webp?rlkey=pb50vzyleb6i53ohwo2ppi04y&dl=0&raw=1',
    {
        coffee: '80 мл (80 г)',
        milk: '50 мл (50 г)',
        milkFoam: 'Мінімальний рівень',
        submission: 'Спершу кава, потім молоко',
        volume: '130 мл (130 г)',
        appearance: 'Інтенсивний еспресо, змішаний з невеликою кількістю молока',
    });

export class ColdCoffeeDrink extends Drink {
    public data: {
        process: {
            general: {
                extraction?: string;
            },
            ice?: {
                coffee: string;
                water?: string;
                iceCubes: string;
            },
            extraIce?: {
                coffee: string;
                water?: string;
                iceCubes: string;
            },
            original?: {
                beanWeight?: number | string;
                coffee: string;
                iceCubes: string;
            },
            intense?: {
                beanWeight?: number | string;
                coffee: string;
                iceCubes: string;
            },
            littleCup?: {
                coffee: string;
                iceCubes: string;
            },
            bigCup?: {
                coffee: string;
                iceCubes: string;
            },
        };
        result: {
            volume: string;
            appearance: string;
        }
    } | null;

    constructor(public name: string,
                public description: string,
                public imageUrl: string,
                data: {
                    general?: {
                        extraction?: string;
                    },
                    ice?: {
                        coffee: string,
                        water?: string,
                        iceCubes: string,
                    },
                    extraIce?: {
                        coffee: string,
                        water?: string,
                        iceCubes: string,
                    },
                    original?: {
                        beanWeight?: number | string,
                        coffee: string,
                        iceCubes: string,
                    },
                    intense?: {
                        beanWeight?: number | string,
                        coffee: string,
                        iceCubes: string,
                    },
                    littleCup?: {
                        coffee: string,
                        iceCubes: string,
                    },
                    bigCup?: {
                        coffee: string,
                        iceCubes: string,
                    },
                    extraction?: string,
                    volume: string,
                    appearance: string
                } | null) {
        super(name, description, imageUrl);

        this.data = data
            ? {
                process: {
                    general: {
                        extraction: data.general?.extraction,
                    },
                    ice: data.ice
                        ? {
                            coffee: data.ice.coffee,
                            water: data.ice.water,
                            iceCubes: data.ice.iceCubes,
                        }
                        : undefined,
                    extraIce: data.extraIce
                        ? {
                            coffee: data.extraIce.coffee,
                            water: data.extraIce.water,
                            iceCubes: data.extraIce.iceCubes,
                        }
                        : undefined,
                    original: data.original
                        ? {
                            beanWeight: data.original.beanWeight,
                            coffee: data.original.coffee,
                            iceCubes: data.original.iceCubes,
                        }
                        : undefined,
                    intense: data.intense
                        ? {
                            beanWeight: data.intense.beanWeight,
                            coffee: data.intense.coffee,
                            iceCubes: data.intense.iceCubes,
                        }
                        : undefined,
                    littleCup: data.littleCup
                        ? {
                            coffee: data.littleCup.coffee,
                            iceCubes: data.littleCup.iceCubes,
                        }
                        : undefined,
                    bigCup: data.bigCup
                        ? {
                            coffee: data.bigCup.coffee,
                            iceCubes: data.bigCup.iceCubes,
                        }
                        : undefined,
                },
                result: {
                    volume: data.volume,
                    appearance: data.appearance,
                },
            }
            : null;
    }
}

export const COLD_AMERICANO = new ColdCoffeeDrink('Cold Americano',
    'Американо, що подається з льодом, чудовий освіжаючий напій.',
    'https://www.dropbox.com/scl/fi/iddk8zt5urj2kweptdozo/cold-americano.webp?rlkey=yd54lvrogchwtsb1aowdocm0k&dl=0&raw=1',
    {
        ice: {
            coffee: '40 мл ( 40 г)',
            water: '90 мл (90 г)',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            coffee: '30 мл (30 г)',
            water: '70 мл (70 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '225 мл',
        appearance: 'Майже немає пінки після додавання води. Кава з льодом для освіжаючої перерви',
    });

export const COLD_COFFEE = new ColdCoffeeDrink('Cold Coffee',
    'М\'який та міцний смак кави, яка не розбавляється водою, подається з льодом (холодна кава має фазу попереднього змочування, на відміну від гарячої кави).',
    'https://www.dropbox.com/scl/fi/1gam6aq0lp0xufnutmnrm/cold-coffee.webp?rlkey=m57h5071db20tyqgtt9vu9toj&dl=0&raw=1',
    {
        ice: {
            coffee: '100 мл (100 г)',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            coffee: '70 мл (70 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '195 мл',
        appearance: 'Рівномірно-коричневий напій',
    });

export const COLD_ESPRESSO = new ColdCoffeeDrink('Cold Espresso',
    'Прохолодний еспресо, що подається з льодом.',
    'https://www.dropbox.com/scl/fi/rif8dx8xvv9ka2g4dzni8/cold-espresso.webp?rlkey=8l4mc48y5172b6temh4fs2xkv&dl=0&raw=1',
    null);

export const COLD_BREW = new ColdCoffeeDrink('Cold Brew',
    'Чашка освіжаючого напою Cold Brew, приготованого за кімнатної температури менше ніж за 5 хвилин, подається з льодом.',
    'https://www.dropbox.com/scl/fi/0ub7np9e7oe7gq7pcii6d/cold-brew.webp?rlkey=5e2mdwnkpklh3ubj9pynr6ox9&dl=0&raw=1',
    {
        general: {
            extraction: 'Порційне надходження води кімнатної температури у заварювальний блок під низьким тиском',
        },
        original: {
            beanWeight: 11.5,
            coffee: '120 мл',
            iceCubes: '4 (60 мл)',
        },
        intense: {
            beanWeight: 13,
            coffee: '120 мл',
            iceCubes: '6 (95 мл)',
        },
        volume: '180 мл',
        appearance: 'Чашка освіжаючого напою Cold Brew, приготованого за кімнатної температури',
    });

export const COLD_BREW_TO_MIX = new ColdCoffeeDrink('Cold Brew to Mix',
    'Концентрований напій Cold Brew ідеально підходить для змішування з іншими інгредієнтами.',
    'https://www.dropbox.com/scl/fi/mxr2m6lc2itpar1fb1xpr/cold-brew-to-mix.webp?rlkey=hc6downsxkh2bszbvff6eupxn&dl=0&raw=1',
    {
        general: {
            extraction: 'Порційне надходження води кімнатної температури у заварювальний блок під дуже низьким тиском',
        },
        original: {
            beanWeight: 12,
            coffee: '60 мл',
            iceCubes: '6 (95 мл)',
        },
        intense: {
            beanWeight: 13.5,
            coffee: '60 мл',
            iceCubes: '6 (95 мл)',
        },
        volume: 'Близько 255 мл (Загальний об\'єм залежить від інших інгредієнтів, що додаються для створення коктейлів: сиропів, тоніків тощо)',
        appearance: 'Напій-база для створення коктейлів та інших креативних рецептів',
    });

export const COLD_BREW_POT = new ColdCoffeeDrink('Cold Brew Pot',
    'Приготуйте до 6 порцій холодних напоїв поспіль прямо в кавник, щоб розділити задоволення від освіжаючої кави.',
    'https://www.dropbox.com/scl/fi/njvixl8w9w0sk4oxh1f6a/cold-brew-pot.webp?rlkey=5amquf26s2ue0wln1mx25uyyy&dl=0&raw=1',
    {
        general: {
            extraction: 'Порційне надходження води кімнатної температури у заварювальний блок під дуже низьким тиском',
        },
        original: {
            coffee: '120 мл',
            iceCubes: 'До 4 кубиків льоду, можна покласти безпосередньо у келих',
        },
        intense: {
            coffee: '120 мл',
            iceCubes: 'До 4 кубиків льоду, можна покласти безпосередньо у келих',
        },
        volume: 'До 720 мл',
        appearance: 'Величезна порція освіжаючої кави',
    });

export const OVER_ICE = new ColdCoffeeDrink('Over Ice',
    'Over Ice — м\'який і водночас міцний напій. Кава заварюється на зниженій температурі та подається поверх льоду. Рекомендується готувати на максимальній міцності',
    'https://www.dropbox.com/scl/fi/tghwsw6yfswa8wbonx9hl/over-ice.webp?rlkey=ro3ybz8r2t07x1pqz8e3fkx4v&dl=0&raw=1',
    {
        original: {
            coffee: '100 мл',
            iceCubes: '6 (95 мл)',
        },
        volume: '195 мл',
        appearance: 'Вишуканий та ароматний напій з насиченим стійким смаком',
    });

export const ICED_COFFEE = new ColdCoffeeDrink('Iced Coffee',
    'Кава, що заварюється на зниженій температурі, з додаванням льоду',
    'https://www.dropbox.com/scl/fi/5hwhonbg7w1lp81fsyifu/iced-coffee.webp?rlkey=iack139qe1y1ajqlbngxarnyh&dl=0&raw=1',
    {
        original: {
            coffee: '100 мл',
            iceCubes: '6 (95 мл)',
        },
        volume: '195 мл',
        appearance: 'Вишукана та ароматна кава з льодом',
    });

export const COLD_COFFEE_MIX_CARAFE = new ColdCoffeeDrink('Cold Coffee (MixCarafe)',
    'Еспресо змішаний з кубиками льоду та спінений у MixCarafe.',
    'https://www.dropbox.com/scl/fi/aswofjgaashei5najcop9/cold-coffee-mixcarafe.webp?rlkey=lcyj7sa5dj81kuqhaosqtowpp&dl=0&raw=1',
    {
        littleCup: {
            coffee: '70 мл (70 г)',
            iceCubes: '9 (45 мл)',
        },
        bigCup: {
            coffee: '120 мл (120 г)',
            iceCubes: '18 (90 мл)',
        },
        volume: '115 мл (маленька чашка) / 210 мл (велика чашка)',
        appearance: 'Освіжаючий еспресо з пишною кавовою пінкою крема',
    });

export class ColdMilkDrink extends Drink {
    public data: {
        process: {
            general?: {
                extraction?: string;
                milkFoam?: string;
                submission?: string;
            },
            ice?: {
                coffee?: string;
                milk?: string;
                iceCubes: string;
            },
            extraIce?: {
                coffee?: string;
                milk?: string;
                iceCubes: string;
            },
            original?: {
                coffee: string;
                iceCubes: string;
            },
            intense?: {
                coffee: string;
                iceCubes: string;
            },
            littleCup?: {
                milk: string;
            },
            bigCup?: {
                milk: string;
            },
        };
        result: {
            volume: string;
            appearance: string;
        }
    } | null;

    constructor(public name: string,
                public description: string,
                public imageUrl: string,
                data: {
                    general?: {
                        extraction?: string,
                        milkFoam?: string,
                        submission?: string,
                    },
                    ice?: {
                        coffee?: string,
                        milk?: string,
                        iceCubes: string,
                    },
                    extraIce?: {
                        coffee?: string,
                        milk?: string,
                        iceCubes: string,
                    },
                    original?: {
                        coffee: string,
                        iceCubes: string,
                    },
                    intense?: {
                        coffee: string,
                        iceCubes: string,
                    },
                    littleCup?: {
                        milk: string,
                    },
                    bigCup?: {
                        milk: string,
                    },
                    volume: string,
                    appearance: string
                } | null) {
        super(name, description, imageUrl);

        this.data = data
            ? {
                process: {
                    general: {
                            extraction: data.general?.extraction,
                            milkFoam: data.general?.milkFoam,
                            submission: data.general?.submission,
                        },
                    ice: data.ice
                        ? {
                            coffee: data.ice.coffee,
                            milk: data.ice.milk,
                            iceCubes: data.ice.iceCubes,
                        }
                        : undefined,
                    extraIce: data.extraIce
                        ? {
                            coffee: data.extraIce.coffee,
                            milk: data.extraIce.milk,
                            iceCubes: data.extraIce.iceCubes,
                        }
                        : undefined,
                    original: data.original
                        ? {
                            coffee: data.original.coffee,
                            iceCubes: data.original.iceCubes,
                        }
                        : undefined,
                    intense: data.intense
                        ? {
                            coffee: data.intense.coffee,
                            iceCubes: data.intense.iceCubes,
                        }
                        : undefined,
                    littleCup: data.littleCup
                        ? {
                            milk: data.littleCup.milk,
                        }
                        : undefined,
                    bigCup: data.bigCup
                        ? {
                            milk: data.bigCup.milk,
                        }
                        : undefined,
                },
                result: {
                    volume: data.volume,
                    appearance: data.appearance,
                },
            }
            : null;
    }
}

export const COLD_CAPPUCCINO = new ColdMilkDrink('Cold Cappuccino',
    'Капучино з молоком, спіненим за допомогою карафки De’Longhi LatteCrema Cool та максимальним рівнем піни, подається з льодом для ще більш освіжаючого смаку.',
    'https://www.dropbox.com/scl/fi/lh2d5mi7ypim8y4gz2hmc/cold-cappuccino.webp?rlkey=k48pr458tcipcmzrfuu0zo2pa&dl=0&raw=1',
    {
        general: {
            milkFoam: 'Максимальний рівень',
            submission: 'Лід, спершу молоко, потім кава',
        },
        ice: {
            coffee: '65 мл (65 г)',
            milk: '165 мл (100 г)',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            coffee: '55 мл (55 г)',
            milk: '145 мл (85 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '325 мл',
        appearance: 'Окремі шари холодної піни, кави та молока. Кубики льоду для більш освіжаючого напою',
    });

export const COLD_CAPPUCCINO_MIX = new ColdMilkDrink('Cold Cappuccino Mix',
    'Капучино-мікс з молоком, спіненим за допомогою карафки De’Longhi LatteCrema Cool та максимальним рівнем піни, подається з льодом для ще більш освіжаючого смаку.',
    'https://www.dropbox.com/scl/fi/z25x6c5jlzkjy3q121oef/cold-cappuccino-mix.webp?rlkey=8oj26x6w3kli5j1oqwsngd1kp&dl=0&raw=1',
    {
        general: {
            milkFoam: 'Максимальний рівень',
            submission: 'Лід, спершу кава, потім молоко',
        },
        ice: {
            coffee: '65 мл (65 г)',
            milk: '165 мл (100 г)',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            coffee: '55 мл (55 г)',
            milk: '145 мл (85 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '325 мл',
        appearance: 'Рівномірно-коричневий, еспресо, змішаний із холодним молоком та піною. Кубики льоду доповнюють напій',
    });

export const COLD_LATTE_MACCHIATO = new ColdMilkDrink('Cold Latte Macchiato',
    'Лате-мак\'ято з молоком, спіненим за допомогою карафки De’Longhi LatteCrema Cool та середнім рівнем піни, подається з льодом, щоб зробити вашу каву-брейк ще більш освіжаючою.',
    'https://www.dropbox.com/scl/fi/8lcifi96fry2xsiiq0b34/cold-latte-macchiato.webp?rlkey=p9zi5287fm4zm85aonqabza8q&dl=0&raw=1',
    {
        general: {
            milkFoam: 'Середній рівень',
            submission: 'Лід, спершу молоко, потім кава',
        },
        ice: {
            coffee: '65 мл (65 г)',
            milk: '250 мл (175 г)',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            coffee: '60 мл (60 г)',
            milk: '230 мл (160 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '410 мл (Ice) / 415 мл (Extra Ice)',
        appearance: 'Розділені шари молока, кави та холодної молочної піни. Кубики льоду для більш освіжаючого молочного напою',
    });

export const COLD_CAFFELATTE = new ColdMilkDrink('Cold Caffelatte',
    'Лате з молоком, спіненим за допомогою карафки De’Longhi LatteCrema Cool і мінімальним рівнем піни, подається з льодом для створення молочного напою, що охолоджує.',
    'https://www.dropbox.com/scl/fi/czh65enlvsnjzg85g51f9/cold-caffelatte.webp?rlkey=7gvxvtdhvd8ie5lkxotdqbk64&dl=0&raw=1',
    {
        general: {
            milkFoam: 'Мінімальний рівень',
            submission: 'Лід, спершу кава, потім молоко',
        },
        ice: {
            coffee: '65 мл (65 г)',
            milk: '245 мл (230 )',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            coffee: '60 мл (60 г)',
            milk: '225 мл (210 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '405 мл (Ice) / 410 мл (Extra Ice)',
        appearance: 'Об\'ємний молочно-кавовий напій із мінімальним шаром холодної піни. Додайте кубики льоду, щоб зробити його холоднішим та більш освіжаючим',
    });

export const COLD_FLAT_WHITE = new ColdMilkDrink('Cold Flat White',
    'Флет-вайт з молоком, спіненим за допомогою карафки De’Longhi LatteCrema Cool, та середнім рівнем бархатистої піни, подається з льодом для надання освіжаючого смаку.',
    'https://www.dropbox.com/scl/fi/ozel3ha1uvcghv231mn4u/cold-flat-white.webp?rlkey=bkp80fap0y2pipu2r4tb35ary&dl=0&raw=1',
    {
        general: {
            milkFoam: 'Середній рівень',
            submission: 'Лід, спершу кава, потім молоко',
        },
        ice: {
            coffee: '65 мл (65 г)',
            milk: '166 мл (115 г)',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            coffee: '50 мл (55 г)',
            milk: '144 мл (100 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '320 мл',
        appearance: 'Еспресо з мікропінкою (пропарене холодне молоко з дрібними бульбашками та глянсовою або бархатистою консистенцією) та кубиками льоду, щоб зробити його освіжаючим',
    });

export const COLD_MILK = new ColdMilkDrink('Cold Milk',
    'Холодне молоко, спінене за допомогою карафки De’Longhi LatteCrema Cool з максимальним рівнем піни, змішане з кубиками льоду для отримання прохолодного молочного напою.',
    'https://www.dropbox.com/scl/fi/p18fh6enowi5n8uu79vkm/cold-milk.webp?rlkey=o2v53quwri8mrf1vtgmrtfj8o&dl=0&raw=1',
    {
        general: {
            milkFoam: 'Максимальний рівень',
        },
        ice: {
            milk: '305 мл (185 г)',
            iceCubes: '6 (95 мл)',
        },
        extraIce: {
            milk: '275 мл (165 г)',
            iceCubes: '8 (125 мл)',
        },
        volume: '400 мл',
        appearance: 'Освіжаюче молоко з молочною пінкою',
    });

export const COLD_BREW_CAPPUCCINO = new ColdMilkDrink('Cold Brew Cappuccino',
    'Насичений холодний напій із вершковою пінкою з холодного молока для освіжаючого задоволення.',
    'https://www.dropbox.com/scl/fi/tsn4ni7mu3w9xhyeoblrf/cold-brew-cappuccino.webp?rlkey=ipp74l3poy76xqhys6uljseha&dl=0&raw=1',
    {
        general: {
            extraction: 'Порційне надходження води кімнатної температури до заварювального блоку під дуже низьким тиском',
            milkFoam: 'Максимальний рівень',
            submission: 'Лід, кава холодної екстракції, холодне спінене молоко',
        },
        original: {
            coffee: '120 мл',
            iceCubes: '4 (60 мл)',
        },
        intense: {
            coffee: '120 мл',
            iceCubes: '6 (95 мл)',
        },
        volume: '180 мл',
        appearance: 'Багатошаровий напій з густою піною',
    });

export const COLD_BREW_LATTE = new ColdMilkDrink('Cold Brew Latte',
    'Освіжаючий напій холодної екстракції, який подається з вершковою, холодною молочною пінкою.',
    'https://www.dropbox.com/scl/fi/1nzzd8txd59g3k75hzv42/cold-brew-latte.webp?rlkey=dgzwslf68kxawpdtxssw8ylvg&dl=0&raw=1',
    {
        general: {
            extraction: 'Порційне надходження води кімнатної температури до заварювального блоку під дуже низьким тиском',
            milkFoam: 'Середній рівень',
            submission: 'Лід, кава холодної екстракції, холодне спінене молоко',
        },
        original: {
            coffee: '120 мл',
            iceCubes: '4 (60 мл)',
        },
        intense: {
            coffee: '120 мл',
            iceCubes: '6 (95 мл)',
        },
        volume: '443 мл',
        appearance: 'Двошаровий напій з вершковою піною',
    });

export const COLD_MILK_FOAM_MIX_CARAFE = new ColdMilkDrink('Cold Milk Foam (MixCarafe)',
    'Холодне молоко спінене у MixCarafe',
    'https://www.dropbox.com/scl/fi/j4i9bt6ionetedf243iem/cold-milk-mix-carafe.webp?rlkey=9cqlqcdpyunuht6hiol792nfn&dl=0&raw=1',
    {
        general: {},
        littleCup: {
            milk: '100 мл',
        },
        bigCup: {
            milk: '200 мл',
        },
        volume: '100 мл (маленька чашка) / 200 мл (велика чашка)',
        appearance: 'Освіжаюче молоко із щільною молочною піною',
    });

export const CHOCOLATE_MIX_CARAFE = new Drink('Hot Chocolate (MixCarafe)',
    'Шоколадний напій створюється унікальною системою. Міксер розташовується на дні карафки та активується за допомогою магніту, розташованого в зоні піддону для крапель. Змішується молоко і шоколад, або какао-порошок, і збільшується об\'єм за рахунок додавання повітря, тоді як гаряча пара надходить до карафки через трубку – в результаті смачний і розкішний напій!',
    'https://www.dropbox.com/scl/fi/t5jwcioliwxbudhf7glil/hot-chocolate-mix-carafe.webp?rlkey=dws3nlj8ew7c20dyzqghc67qk&dl=0&raw=1');

export const HOT_WATER = new Drink('Hot Water',
    'Функція "Гаряча вода" використовується для отримання окремого струменя гарячої води без приготування кавових напоїв. Ця функція може бути корисною для розведення еспресо для отримання американо, для підігріву чи попереднього змочування чашки перед приготуванням кави, а також для інших гарячих напоїв, таких як чай або глінтвейн.',
    'https://www.dropbox.com/scl/fi/lq2rwb0w67ais0biukrxs/hot-water.webp?rlkey=zyaphpdmr1mw5fkuqhmcou9cx&dl=0&raw=1');

export const STEAM_HOT_WATER = new Drink('Steam / Hot Water',
    'Функція "Пар" використовується для створення струменя гарячого пару для приготування кавових напоїв з додаванням молока, таких як капучино або лате. Коли користувач активує функцію "Пар" на кавомашині, пристрій починає нагрівати воду до високої температури, перетворюючи її на пар. Цей пар потім подається через спеціальну парову трубку-стімер (панарелло) у ємність з молоком, створюючи молочну пінку.',
    'https://www.dropbox.com/scl/fi/qe45iy5gtpdx78axh583p/steam.webp?rlkey=qespnjoewaa9uckvpwjwnxvxw&dl=0&raw=1');

export const MUG_TO_GO = new Drink('Mug To Go',
    'Спеціальна функція для людей, які хочуть створювати та налаштовувати свій власний напій, щоб взяти його із собою. Об\'єм — 250 мл. Підходить для всіх рецептів кави De’Longhi (у тому числі Over Ice) та молока, об\'єм яких не перевищує 250 мл.',
    'https://www.dropbox.com/scl/fi/tafytdzj9xcffvah357cn/mug-to-go.webp?rlkey=wplrelpy4b4mf77q5qr8bbohm&dl=0&raw=1');

export class Tea {
    constructor(public name: string,
                public temperature: string,
                public brewingTime: string) {
    }
}

export class TeaFunction extends Drink {
    public data: {
        white: Tea;
        green: Tea;
        black: Tea;
        oolong: Tea;
    };

    constructor(public name: string,
                public description: string,
                public imageUrl: string,
                data: {
                    white: Tea,
                    green: Tea,
                    black: Tea,
                    oolong: Tea,
                }) {
        super(name, description, imageUrl);

        this.data = data;
    }
}

export const TEA_FUNCTION = new TeaFunction('Tea Function',
    'Коли справа доходить до чаю, важливо, щоб кожен тип заварювався за правильної температури, щоб найкраще розкрити смак. Машини De’Longhi подають воду різної температури в залежності від вибраного типу чаю або настою.',
    'https://www.dropbox.com/scl/fi/y4wl3ddce4p795lsyjwxe/tea.webp?rlkey=z7xlv7qunhgf7o377ioaab9rd&dl=0&raw=1',
    {
        white: new Tea('Білий чай', 'Приблизно 75 °C (70-80 °C)', '1–3 хв'),
        green: new Tea('Зелений чай', 'Приблизно 80 °C (70-80 °C)', '1–2 хв'),
        black: new Tea('Чорний чай', 'Приблизно 95 °C (90-98 °C)', '1–5 хв'),
        oolong: new Tea('Улун', 'Приблизно 90 °C (90-95 °C)', '30 с - 1 хв'),
    },
);

export type DrinkType = HotCoffeeDrink
    | HotMilkDrink
    | ColdCoffeeDrink
    | ColdMilkDrink
    | TeaFunction
    | Drink;

export type HotCoffeeDrinksType = HotCoffeeDrink[];

export type HotMilkDrinksType = HotMilkDrink[];

export type ColdCoffeeDrinksType = ColdCoffeeDrink[];

export type ColdMilkDrinksType = ColdMilkDrink[];

export type OtherDrinksType = Array<Drink | TeaFunction>;

export type DrinksDataPropertyType = {
    data: {
        process: {
            general: {
                beanWeight?: number | string;
                preWetting?: boolean;
                pressure?: string;
                coffee?: string;
                water?: string;
                extraction?: string;
                milk?: string;
                milkFoam?: string;
                submission?: string;
            };
            ice?: {
                coffee?: string;
                water?: string;
                milk?: string;
                iceCubes?: string;
            };
            extraIce?: {
                coffee?: string;
                water?: string;
                milk?: string;
                iceCubes?: string;
            };
            original?: {
                beanWeight?: number | string;
                coffee?: string;
                iceCubes?: string;
            };
            intense?: {
                beanWeight?: number | string;
                coffee?: string;
                iceCubes?: string;
            };
            littleCup?: {
                coffee?: string;
                milk?: string;
                iceCubes?: string;
            };
            bigCup?: {
                coffee?: string;
                milk?: string;
                iceCubes?: string;
            };
            white?: Tea;
            green?: Tea;
            black?: Tea;
            oolong?: Tea;
        };
        result: {
            volume?: string;
            appearance?: string;
        };
    }
} | null;


