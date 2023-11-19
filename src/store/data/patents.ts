export class Patent {
    constructor(public image: string,
                public title: string,
                public description: string) {
        this.image = image;
        this.title = title;
        this.description = description;
    }
}

export const crf = new Patent(
    'https://www.dropbox.com/scl/fi/pdbeirc2n4jcg0001oc0e/CRF.jpg?rlkey=l4onir9xwfy817p912r6rcf7n&dl=0&raw=1',
    'CRF',
    'CRF (Compact - Компактність, Reliable - Надійність, Fresh - Свіжість) — це комплекс взаємодії системи Tubeless та заварювального блоку. В основу системи закладено три принципи: легко виймається; не вимагає спеціальних знань для здійснення догляду; легко промивається водою. Це гарантує споживачу економію часу та коштів.');

export const tubeless = new Patent(
    'https://www.dropbox.com/scl/fi/v2dutt7j5cn7nxs5r43ux/Tubeless.jpg?rlkey=oyonu2z2xczh5e16f9jm9rlt8&dl=0&raw=1',
    'Tubeless',
    'Заварювальний блок кавомашин DeLonghi під’їжджає впритул до кавомолки в момент її роботи. Мелена кава подається напряму в заварювальний блок без трубок та воронок. Завдяки цьому мінімізується кількість кави, яка залишається в системі після кожного приготування. Тому споживач завжди п’є каву, яка була щойно змелена, іншими словами - бездоганно-свіжу каву.');

