

// >> sidedrawer-getting-started-angular
import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
import {Color} from "tns-core-modules/color";
import { viewMatchesModuleContext } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
//import { registerElement } from "nativescript-angular/element-registry";
//import { Video } from 'nativescript-videoplayer';

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-getting-started",
    templateUrl: 'sidedrawer.component.html',
    styleUrls: ['sidedrawer.component.css']
})

export class SideDrawerComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;
Tops:string; category:string;
selectedtopIndex:number;
    constructor(private _changeDetectionRef: ChangeDetectorRef,private router:RouterExtensions) {
    }
    @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;




    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.mainContentText = "A place for all shopaholic people"    }

ViewTops(){

this.mainContentText="you selected top";

this.router.navigate(['/dropdown']);

}

ViewBottoms(){}



    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

  public  open() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }
}
// << sidedrawer-getting-started-angular
