import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPage,
    children : [
      {
        path: 'cours',
        loadChildren: () => import('./cours/cours.module').then( m => m.CoursPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'accueil',
        loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: '',
        redirectTo: 'acceuil',
        pathMatch:'full'
      }
    ]
  },
  {
    path: 'cours-checkout',
    loadChildren: () => import('./cours-checkout/cours-checkout.module').then( m => m.CoursCheckoutPageModule)
  },
  {
    path: 'code-check',
    loadChildren: () => import('./code-check/code-check.module').then( m => m.CodeCheckPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
