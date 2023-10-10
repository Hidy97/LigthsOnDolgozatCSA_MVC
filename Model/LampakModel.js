class LampakModel {
    #lista
    #allapot
    constructor() {
        this.#allapot = false;
        //this.#lista = [true, true, true, true, true, true, true, true, true]
        this.#lista = [false, false, false, false, false, false, false, false, false]
    }

    setAllapot(index){
        console.log("EZZEl állítja be az állapotot. Eléri?")
        if (this.#allapot == false) {
            this.#allapot = true
        } else {
            this.#allapot = false
        }
        this.#lista[index] = this.#allapot;
    }

    getErtek() {
        return this.#allapot
    }

    getList(){
        return this.#lista
    }
}

export default LampakModel;