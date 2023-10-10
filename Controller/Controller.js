import LampakModel from "../Model/LampakModel.js";
import LampakView from "../View/LampakView.js";
import LampaElemView from "../View/LampaElemView.js";
class Controller {
    constructor() {
        this.LAMPAKMODEL = new LampakModel;
        this.LAMPAKVIEW = new LampakView(this.LAMPAKMODEL.getList);

        $(window).on("bekapcs", (event) => {
            //console.log("katt")
            console.log(event.detail)
            event.detail.setAllapot(1)
        })
    }
}

export default Controller;