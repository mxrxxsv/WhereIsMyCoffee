import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffeePagePageRoutingModule } from './coffee-page-routing.module';

import { CoffeePagePage } from './coffee-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffeePagePageRoutingModule
  ],
  declarations: [CoffeePagePage]
})
export class CoffeePagePageModule {}
