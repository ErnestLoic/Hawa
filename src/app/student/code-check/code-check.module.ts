import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeCheckPageRoutingModule } from './code-check-routing.module';

import { CodeCheckPage } from './code-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeCheckPageRoutingModule
  ],
  declarations: [CodeCheckPage]
})
export class CodeCheckPageModule {}
