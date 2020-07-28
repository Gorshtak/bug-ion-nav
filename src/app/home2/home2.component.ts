import { Component, OnInit, ViewChild } from "@angular/core";
import { IonNav } from "@ionic/angular";
import { NavService } from "../nav.service";
import { Child2Component } from "./child2/child2.component";
import { Root2Component } from "./root2/root2.component";

@Component({
  selector: "app-home2",
  templateUrl: "./home2.component.html",
  styleUrls: ["./home2.component.scss"],
})
export class Home2Component implements OnInit {
  root = Root2Component;

  @ViewChild("nav", { static: true }) nav: IonNav;

  constructor(private readonly navService: NavService) {}

  ngOnInit() {
    this.navService.navSub.subscribe((val) => {
      if (val) {
        this.nav.push(Child2Component);
      } else {
        this.nav.pop();
      }
    });
  }
}
