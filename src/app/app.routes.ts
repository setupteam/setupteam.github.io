import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ESportsComponent } from './features/esports/esports.component';
import { ValorantComponent } from './features/esports/components/valorant/valorant.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: "eSports", 
        component: ESportsComponent,
        children:[
            {path: "valorant", component: ValorantComponent}
        ]
    },
];
