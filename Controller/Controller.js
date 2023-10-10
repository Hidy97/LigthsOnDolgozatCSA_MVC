import LampakModel from "../Model/LampakModel.js";
import LampakView from "../View/LampakView.js";
class Controller {
    constructor() {
        this.LAMPAKMODEL = new LampakModel;
        this.LAMPAKVIEW = new LampakView(this.LAMPAKMODEL.getList);

        $(window).on("bekapcs", (event) => {
            //console.log("katt")
            console.log(event.detail)
            //this.LAMPAKMODEL.setAllapot(event.detail.getIndex());
            this.LAMPAKMODEL.setAllapot(event.detail.setSzin(this.LAMPAKMODEL.getErtek()));
        })
    }
}

export default Controller;