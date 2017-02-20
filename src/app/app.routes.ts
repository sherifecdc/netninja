import {Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";

export const APP_ROUTES:Routes = [
    {path:'', component:HomeComponent},
    {path:'list', component:ListComponent}
];

export const App_Routing = RouterModule.forRoot(APP_ROUTES);