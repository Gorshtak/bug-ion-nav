import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { Child2Component } from "./child2/child2.component";
import { Home2Component } from "./home2.component";
import { Root2Component } from "./root2/root2.component";

const routes: Routes = [
  {
    path: "",
    component: Home2Component,
  },
];

@NgModule({
  declarations: [Home2Component, Root2Component, Child2Component],
  entryComponents: [],
  imports: [IonicModule, RouterModule.forChild(routes)],
})
export class Home2PageModule {}
