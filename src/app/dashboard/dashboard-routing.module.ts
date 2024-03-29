import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: 'rules',
        loadChildren: () => import('../rules/rules-routing.module').then(m => m.RulesRoutingModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
