import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursCheckoutPage } from './cours-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: CoursCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursCheckoutPageRoutingModule {}
