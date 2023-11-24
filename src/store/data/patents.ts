import {ESPRESSO, ESPRESSO_LUNGO, RISTRETTO} from './drinks';

export class Patent {
    constructor(public image: string,
                public videoId: string | null,
                public title: string,
                public description: string,
                public remark?: string) {
        this.image = image;
        this.videoId = videoId;
        this.title = title;
        this.description = description;
        this.remark = remark;
    }
}

export const crf = new Patent(
    'https://www.dropbox.com/scl/fi/pdbeirc2n4jcg0001oc0e/CRF.jpg?rlkey=l4onir9xwfy817p912r6rcf7n&dl=0&raw=1',
    null,
    'CRF',
    'CRF (Compact - Компактність, Reliable - Надійність, Fresh - Свіжість) — це комплекс взаємодії системи Tubeless та заварювального блоку. В основу системи закладено три принципи: легко виймається; не вимагає спеціальних знань для здійснення догляду; легко промивається водою. Це гарантує споживачу економію часу та коштів.',
);

export const tubeless = new Patent(
    'https://www.dropbox.com/scl/fi/v2dutt7j5cn7nxs5r43ux/Tubeless.jpg?rlkey=oyonu2z2xczh5e16f9jm9rlt8&dl=0&raw=1',
    'dTTbafGlvVw',
    'Tubeless',
    'Заварювальний блок кавомашин De’Longhi під’їжджає впритул до кавомолки в момент її роботи. Мелена кава подається напряму в заварювальний блок без трубок та воронок. Завдяки цьому мінімізується кількість кави, яка залишається в системі після кожного приготування. Тому споживач завжди п’є каву, яка була щойно змелена, іншими словами - бездоганно-свіжу каву.',
);

export const brewingUnit = new Patent(
    'https://www.dropbox.com/scl/fi/uisbe4nf5a8gb4z9wpe52/Brewing-Unit.jpg?rlkey=c56q1xvgfv3pwz3e9h2ciukr0&dl=0&raw=1',
    'tK5PLd2duUY',
    'Brewing Unit',
    'Заварювальний блок — це «серце» повністю автоматичної кавомашини, а отже, і процесу приготування кави. Заварювальний блок De’Longhi має змінну камеру, здатну вміщувати різну кількість меленої кави, щоб завжди забезпечувати ідеальний результат у чашці, незалежно від рівня аромату та вибраного напою. Він правильно формує дозу меленої кави, так що екстрагується ідеальна, щільна, ароматна кава.\n' +
    'Фаза перед заварюванням гарантує, що мелена кава буде рівномірно зволожена водою, щоб забезпечити оптимальне заварювання. На наступній стадії вода протікає через каву з певною швидкістю та з правильним тиском, щоб гарантувати ідеальний аромат, уникаючи недостатньої чи надмірної екстракції.',
);


export const twinShot = new Patent(
    'https://www.dropbox.com/scl/fi/3rxz239ldwkhqhsbkun0x/Twin-Shot.jpg?rlkey=gu917e0uga13aydp7b2xsjy0n&dl=0&raw=1',
    null,
    'Twin Shot',
    'Twin Shot — це запатентована система, яка дозволяє приготувати дві чашки кави за один цикл помелу і заварювання, зберігаючи чудову кремову пінку та ідеальну температуру напою. Споживач отримує бездоганну каву навіть при одночасному приготування двох чашок та економить свій час.',
    `Працює з напоями: ${RISTRETTO}, ${ESPRESSO}, ${ESPRESSO_LUNGO}`,
);