import LampaElemView from "./LampaElemView.js";

class LampakView {
    #allapotlista
    constructor(allapotlista) {
        this.#allapotlista = allapotlista;

        this.init();
    }

    init() {

        for (let index = 0; index < 9; index++) {
            let lampacska = new LampaElemView($("article"), index);
            lampacska.setSzin(this.#allapotlista[index])
        }

    }
}

export default LampakView;