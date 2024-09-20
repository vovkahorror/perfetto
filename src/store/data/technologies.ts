import {ESPRESSO, ESPRESSO_LUNGO, RISTRETTO} from './drinks';

export class Technology {
    constructor(public image: string,
                public videoId: string[] | null,
                public title: string,
                public description: string) {
        this.image = image;
        this.videoId = videoId;
        this.title = title;
        this.description = description;
    }
}

export const crf = new Technology(
    'https://www.dropbox.com/scl/fi/pdbeirc2n4jcg0001oc0e/CRF.jpg?rlkey=l4onir9xwfy817p912r6rcf7n&dl=0&raw=1',
    ['oy3IVDFkQms'],
    'CRF',
    'CRF (Compact - Компактність, Reliable - Надійність, Fresh - Свіжість) — це комплекс взаємодії системи Tubeless та заварювального блоку. В основу системи закладено три принципи: легко виймається; не вимагає спеціальних знань для здійснення догляду; легко промивається водою. Це гарантує споживачу економію часу та коштів.',
);

export const tubeless = new Technology(
    'https://www.dropbox.com/scl/fi/v2dutt7j5cn7nxs5r43ux/Tubeless.jpg?rlkey=oyonu2z2xczh5e16f9jm9rlt8&dl=0&raw=1',
    ['dTTbafGlvVw'],
    'Tubeless',
    'Заварювальний блок кавомашин De’Longhi під’їжджає впритул до кавомолки в момент її роботи. Мелена кава подається напряму в заварювальний блок без трубок та воронок. Завдяки цьому мінімізується кількість кави, яка залишається в системі після кожного приготування. Тому споживач завжди п’є каву, яка була щойно змелена, іншими словами - бездоганно-свіжу каву.',
);

export const brewingUnit = new Technology(
    'https://www.dropbox.com/scl/fi/uisbe4nf5a8gb4z9wpe52/Brewing-Unit.jpg?rlkey=c56q1xvgfv3pwz3e9h2ciukr0&dl=0&raw=1',
    ['tK5PLd2duUY'],
    'Brewing Unit',
    'Заварювальний блок — це «серце» повністю автоматичної кавомашини, а отже, і процесу приготування кави. Заварювальний блок De’Longhi має змінну камеру, здатну вміщувати різну кількість меленої кави, щоб завжди забезпечувати ідеальний результат у чашці, незалежно від рівня аромату та вибраного напою. Він правильно формує дозу меленої кави, так що екстрагується ідеальна, щільна, ароматна кава. Саморегулююча система темперування кави застосовує оптимальний тиск залежно від обраного напою та ступеня його міцності, а також обраного ступеня помелу. Діапазон тиску пресування складає від 20 до 40 кг. Фаза перед заварюванням гарантує, що мелена кава буде рівномірно зволожена водою, щоб забезпечити оптимальне заварювання. На наступній стадії вода протікає через каву з певною швидкістю та з правильним тиском, щоб гарантувати ідеальний аромат, уникаючи недостатньої чи надмірної екстракції. Для помелу фракцією 500 мк кавомашини De’Longhi проводять екстракцію під тиском від 9 до 12 бар (із середнім показником у 11,7 бар), що є бездоганним показником для приготування ідеального еспресо.',
);

export const thermoblock = new Technology(
    'https://www.dropbox.com/scl/fi/9k9zaof19oros2l7qlkqj/Therrmoblock.webp?rlkey=562zs27l177uc4fc8ey64cz1d&dl=0&raw=1',
    ['Wd1kmTkFxsY'],
    'Thermoblock',
    'Система термоблока і вдосконалене електронне управління гарантують, що вода завжди нагрівається при оптимальній температурі. У поєднанні з тиском правильна температура води життєво необхідна для кави високої якості. Правильна температура для заварювання повинна бути між 88 °C та 96 °C. У будь-якій кавомашині De’Longhi є можливість встановити температуру в діапазоні від 88 до 96 градусів. Більшість кавомашин з молочним рішенням De’Longhi оснащує двома нагрівальними елементами системи Thermoblock: один повністю розроблений для заварювання кави; другий — розроблений і спрямований на спінювання молока.',
);

export const coffeeGrinder = new Technology(
    'https://www.dropbox.com/scl/fi/rzgkr6vfuiz0hq9egep3f/Coffee-Grinder.webp?rlkey=yq6t10z1tdhvpw5jrnfssk25t&dl=0&raw=1',
    ['kTS7rFKsPvA'],
    'Coffee Grinder',
    'Жорна кавомашин De’Longhi складаються зі сплаву двох металів — нікелю та вольфраму. Вироби з вольфрамо-нікелевого сплаву мають високий рівень надійності, відрізняються тривалістю експлуатації, не потребують поточних ремонтів. Дует цих двох металів відноситься до жароміцних сплавів стійких до корозії. Жорна кавомашин De’Longhi стійкі до нагріву під час роботи, оскільки швидкість необхідних для помелу обертів практично вдвічі нижча у порівнянні з керамічними жорнами, та гарантують споживачу найрівномірніший помел, що надважливо для приготування бездоганної кави. На заводі в Тревізо в кавомашинах De’Longhi встановлюють рівень помелу від 400 до 600 мк. Такий рівень помелу підходить для більшості видів кави. Кавомашини De’Longhi дають максимум персоналізації помелу. Більшість моделей оснащені металевою конічною кавомолкою з 13 ступенями помелу. Деякі — металевою плоскопараллельною з 7 ступенями та електронним регулуванням.',
);

export const twinShot = new Technology(
    'https://www.dropbox.com/scl/fi/3rxz239ldwkhqhsbkun0x/Twin-Shot.jpg?rlkey=gu917e0uga13aydp7b2xsjy0n&dl=0&raw=1',
    ['2Kh37GMKtso'],
    'Twin Shot',
    `Twin Shot — це запатентована система, яка дозволяє приготувати дві чашки кави за один цикл помелу і заварювання, зберігаючи чудову кремову пінку та ідеальну температуру напою. Споживач отримує бездоганну каву навіть при одночасному приготування двох чашок та економить свій час. Система Twin Shot працює з напоями: ${RISTRETTO}, ${ESPRESSO}, ${ESPRESSO_LUNGO}`,
);

export const latteCremaHot = new Technology(
    'https://www.dropbox.com/scl/fi/plmxh8dmecim7nfyweezf/LatteCrema-Hot.jpg?rlkey=v6hbqi0pvq82czwdyh76f0285&dl=0&raw=1',
    ['RwQq7Tr2cBU'],
    'LatteCrema Hot *',
    'De’Longhi вдосконалила технологію автоматичного спінювання молока одним дотиком завдяки спеціальній карафці LatteCrema. Пара, повітря та молоко змішуються в ідеальних пропорціях для створення ідеальної піни, яка подається безпосередньо з карафки в чашку. Споживач може вибрати між 3 текстурами піни як зі звичайним молоком, так і з рослинними альтернативами. Температура молока на виході складає 60-65 °C, що є ідеальним показником для приготування гарячого кавового молочного напою. Карафка LatteCrema оснащена автоматичною системою очищення: достатньо повернути ручку в положення CLEAN, і кавомашина зробить все інше, дозволяючи насолоджуватися напоєм, не відволікаючись. Карафка LatteCrema легко розбирається, а всі її частини можна мити в посудомийній машині для додаткового рівня гігієни. Для найкращих результатів рекомендується до використання напів-знежирене молоко',
);

export const latteCremaCool = new Technology(
    'https://www.dropbox.com/scl/fi/uo2hmx0g2wk7442bbal3x/LatteCrema-Cool.webp?rlkey=oo3m4736r54eg0nzme8n19odj&dl=0&raw=1',
    ['sgPlSe5SZiU'],
    'LatteCrema Cool *',
    'LatteCrema Cool — нова система піноутворення молока, яка забезпечує бархатисту молочну піну при ідеальній температурі для холодних напоїв і включає в себе «формулу солодкості» від De’Longhi, щоб ідеально посилити солодкі нотки молока. Температура молока на виході складає 20 °C, що є ідеальним балансом між температурою і смаком. Для людського організму молоко сприймається холодним та солодким. Усі переваги LatteCrema Hot (можливість регулювати текстуру піни, легке очищення та ін.) характерні і для LatteCrema Cool Technology. Для найкращих результатів рекомендується до використання знежирене молоко.',
);

export const beanAdapt = new Technology(
    'https://www.dropbox.com/scl/fi/5aav5k4zvq62z25gvevlc/Bean-Adapt-2.webp?rlkey=2bfjgak5gglbdxsokzbt0r5je&dl=0&raw=1',
    ['t4K5-10Qb5U'],
    'Bean Adapt *',
    'Технологія Bean Adapt — це інтелект, який легко адаптує налаштування машини до особливостей конкретних зерен, забезпечуючи ідеальну екстракцію кави, зберігаючи та покращуючи всі аромати кавових зерен і дозволяючи споживачеві насолоджуватися найсмачнішою кавою вдома. Користувачу достатньо вибрати тип зерен (100% арабіка або купаж) та ступінь обсмажування (один з чотирьох). Технологія Bean Adapt доступна в повністю автоматичному та напівавтоматичному режимах. У автоматичному режимі технологія Bean Adapt автоматично встановлює всі параметри, включаючи інтенсивність, температуру та рівень помелу, безпосередньо з додатку Coffee Link. У напівавтоматичному — інтенсивність та температура встановлюються автоматично, а відносно рівня помелу кавомашина дає рекомендації стосовно оптимального налаштування для певного типу зерен. Технологія Bean Adapt дозволяє зберігати 6 різних профілів зерен. Оскільки для напоїв, які додають молоко до кави на основі еспресо, багато інших факторів можуть вплинути на загальний кінцевий результат (наприклад, тип використовуваного молока), не існує попередньо встановлених напоїв Bean Adapt Technology, окрім Espresso Soul.',
);

export const coldExtraction = new Technology(
    'https://www.dropbox.com/scl/fi/e5e7ks8onyhepdssy4rm5/Cold-Extraction.webp?rlkey=bc4cki6fpwldy215y2ikajgsv&dl=0&raw=1',
    ['yRb2kNdyBq4'],
    'Cold Extraction *',
    'Завдяки ексклюзивній технології Cold Extraction від De’Longhi споживач може насолодитися ідеальною чашкою Cold Brew вдома менш ніж за 5 хвилин. Унікальна технологія холодної екстракції De’Longhi зберігає квітковий аромат і природну солодкість кавових зерен, забезпечуючи ідеальний смак напою. Технологія De’Longhi Cold Extraction дозволяє швидко та легко приготувати різноманітні напої Cold Brew вдома. Незалежно від того, чи віддає споживач перевагу каві з додаванням молока, ноткою солодкості чи трошки того й іншого, можливості безмежні. Найкраще екстракція Cold Brew працює з легко обсмаженими зернами одного походження, а не купажами.',
);

export const mixCarafe = new Technology(
    'https://www.dropbox.com/scl/fi/nqp8nhapdspzmsvtqfjj6/MixCarafe.webp?rlkey=12midwgz8yknfeyw4c96v9g7c&dl=0&raw=1',
    ['bh7AVtEIWWE', 'c5iJ7VJ5jIU'],
    'MixCarafe *',
    'Преміум-моделі De’Longhi оснащені можливістю приготування гарячого шоколаду, спіненої холодної кави та холодної молочної піни за допомогою карафки MixCarafe. Споживач може використовувати або міксер для шоколаду або спінювач для холодної кави та холодної молочної піни. Магніт у піддоні приводить у дію міксер — повільна швидкість для шоколаду, більш висока — для спіненої холодної кави та холодної молочної піни. Під час приготування холодної кави інтенсивно змішується еспресо та лід для освіжаючого кавового напою. Під час пригтування холодної молочної піни — карафка перетворює молоко у по-справжньому кремову та легку пінку. Для приготування гарячого шоколаду достатньо додати у карафку молоко та порошок, решту кавомашина зробить самостійно.',
);

export const coffeeLink = new Technology(
    'https://www.dropbox.com/scl/fi/ze4qax0wefjj5owm3jipg/Coffee-Link.webp?rlkey=ahjy4r0ql359agazwkv5tp2xj&dl=0&raw=1',
    ['v1eY00gK-mg'],
    'Coffee Link *',
    'За допомогою додатка Coffee Link можна легко отримати віддалений доступ до управління кавомашиною через Bluetooth або Wi-Fi: установити параметри екстрагування кави за допомогою технології Bean Adapt, контролювати та піклуватися про машину, настроювати, створювати та зберігати свої особливі рецепти в особистих профілях, яким можна присвоїти імена, дистанційно запускати приготування кави, а також ознайомитись та відтворити понад 100 креативних рецептів. Функціонал може дещо відрізнятись залежно від моделі кавомашини.',
);

export const beanSwitch = new Technology(
    'https://www.dropbox.com/scl/fi/8oebzlip1icinmvuavjke/Bean-Switch.webp?rlkey=ghe81drw9rw1tz9hwt8ljnev8&st=5sbbyh7f&dl=0&raw=1',
    ['v1eY00gK-mg'],
    'Coffee Link *',
    'За допомогою додатка Coffee Link можна легко отримати віддалений доступ до управління кавомашиною через Bluetooth або Wi-Fi: установити параметри екстрагування кави за допомогою технології Bean Adapt, контролювати та піклуватися про машину, настроювати, створювати та зберігати свої особливі рецепти в особистих профілях, яким можна присвоїти імена, дистанційно запускати приготування кави, а також ознайомитись та відтворити понад 100 креативних рецептів. Функціонал може дещо відрізнятись залежно від моделі кавомашини.',
);