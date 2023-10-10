class LampaElemView{
    #index
    constructor(szuloElem, index){
        this.szuloElem = szuloElem;
        this.#index = index
        this.allapot = false;
        this.#htmlOsszerak()
        this.allapot = false;
        this.divElem = this.szuloElem.children("div:last-child")
        //console.log(this.divElem)
        this.divElem.on("click", () =>{
            //console.log("kattintható")
            this.#sajatEsemenkezelo("bekapcs")
            this.setSzin()
        })
    }

    setSzin(allapot){
        if(allapot != false){
            //console.log("Állapot?")
            this.divElem.css("background-color","black")
            this.allapot = false
        }else{
            this.divElem.css("background-color","green")
            this.allapot = true
        }
        return this.allapot
    }

    #htmlOsszerak(){
        let txt = ""
        txt += `
            <div>
            </div>
        `
        this.szuloElem.append(txt)
    }

    #sajatEsemenkezelo(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail:this})
        window.dispatchEvent(esemenyem)
    }


    getIndex(){
        return this.#index
    }
  
}

export default LampaElemView;