import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NavService {
  navSub: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}
