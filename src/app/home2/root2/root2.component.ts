import { Component, OnInit } from "@angular/core";
import { NavService } from "../../nav.service";

@Component({
  selector: "app-root2",
  templateUrl: "./root2.component.html",
  styleUrls: ["./root2.component.scss"],
})
export class Root2Component implements OnInit {
  constructor(private readonly navService: NavService) {}

  ngOnInit() {}

  pushPage() {
    this.navService.navSub.next(true);
  }
}
