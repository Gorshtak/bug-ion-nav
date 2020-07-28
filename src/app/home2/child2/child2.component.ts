import { Component, OnInit } from "@angular/core";
import { NavService } from "../../nav.service";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.scss"],
})
export class Child2Component implements OnInit {
  constructor(private readonly navService: NavService) {}

  ngOnInit() {}

  popPage() {
    this.navService.navSub.next(false);
  }
}
