import {ESPRESSO, ESPRESSO_LUNGO, RISTRETTO} from './drinks';

export class Patent {
    constructor(public image: string,
                public title: string,
                public description: string,
                public remark?: string) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.remark = remark;
    }
}

export const crf = new Patent(
    'https://www.dropbox.com/scl/fi/pdbeirc2n4jcg0001oc0e/CRF.jpg?rlkey=l4onir9xwfy817p912r6rcf7n&dl=0&raw=1',
    'CRF',
    'CRF (Compact - Компактність, Reliable - Надійність, Fresh - Свіжість) — це комплекс взаємодії системи Tubeless та заварювального блоку. В основу системи закладено три принципи: легко виймається; не вимагає спеціальних знань для здійснення догляду; легко промивається водою. Це гарантує споживачу економію часу та коштів.',
);

export const tubeless = new Patent(
    'https://www.dropbox.com/scl/fi/v2dutt7j5cn7nxs5r43ux/Tubeless.jpg?rlkey=oyonu2z2xczh5e16f9jm9rlt8&dl=0&raw=1',
    'Tubeless',
    'Заварювальний блок кавомашин De’Longhi під’їжджає впритул до кавомолки в момент її роботи. Мелена кава подається напряму в заварювальний блок без трубок та воронок. Завдяки цьому мінімізується кількість кави, яка залишається в системі після кожного приготування. Тому споживач завжди п’є каву, яка була щойно змелена, іншими словами - бездоганно-свіжу каву.',
);

export const twinShot = new Patent(
    'https://www.dropbox.com/scl/fi/3rxz239ldwkhqhsbkun0x/Twin-Shot.jpg?rlkey=gu917e0uga13aydp7b2xsjy0n&dl=0&raw=1',
    'Twin Shot',
    'Twin Shot — це запатентована система, яка дозволяє приготувати дві чашки кави за один цикл помелу і заварювання, зберігаючи чудову кремову пінку та ідеальну температуру напою. Споживач отримує бездоганну каву навіть при одночасному приготування двох чашок та економить свій час.',
    `Працює з напоями: ${RISTRETTO}, ${ESPRESSO}, ${ESPRESSO_LUNGO}`,
);