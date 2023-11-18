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
    'https://www.dropbox.com/scl/fi/5acmyrayfl38ya2jgf5zo/CRF.jpeg?rlkey=cfsrn6icrskynwsvseeyvo3hl&dl=0&raw=1',
    'CRF',
    'CRF (Compact - Компактність, Reliable - Надійність, Fresh - Свіжість) — це комплекс взаємодії системи Tubeless та заварювального блоку. В основу системи закладено три принципи: легко виймається; не вимагає спеціальних знань для здійснення догляду; легко промивається водою. Це гарантує споживачу економію часу та коштів.');

