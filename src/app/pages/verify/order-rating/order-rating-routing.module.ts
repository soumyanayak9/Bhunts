
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderRatingPage } from './order-rating.page';

const routes: Routes = [
  {
    path: '',
    component: OrderRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRatingPageRoutingModule { }
