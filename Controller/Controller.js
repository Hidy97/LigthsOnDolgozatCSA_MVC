import LampakModel from "../Model/LampakModel.js";
import LampakView from "../View/LampakView.js";
class Controller {
    constructor() {
        this.LAMPAKMODEL = new LampakModel;
        this.LAMPAKVIEW = new LampakView(this.LAMPAKMODEL.getList);

        $(window).on("bekapcs", (event) => {
            console.log("katt")
            //this.LAMPAKVIEW.init();
        })
    }
}

export default Controller;