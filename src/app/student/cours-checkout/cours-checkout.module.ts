import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursCheckoutPageRoutingModule } from './cours-checkout-routing.module';

import { CoursCheckoutPage } from './cours-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursCheckoutPageRoutingModule
  ],
  declarations: [CoursCheckoutPage]
})
export class CoursCheckoutPageModule {}
