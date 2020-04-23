import { Component } from "@angular/core";
@Component({
    selector: "my-app",
    templateUrl:"tops.component.html",
    styleUrls: ['tops.component.css']
})
export class TopsComponent {

    x = "";
    y = "";
    z = "";
    Top1() {
        this.x = "Stuff:cotton half-sleeves color:white";
    }
    Top2() {
        this.y = "Stuff:cotton half-sleeves color:black";
    }
    Top3() {
        this.z = "Stuff:cotton half-sleeves color:dark blue";
    }

TopConfirm(){
const toast = Toast.makeText("Your order is confirm","long").show();

}
}
