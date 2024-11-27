import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeePagePage } from './coffee-page.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeePagePageRoutingModule {}
