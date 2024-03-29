
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreRatingPage } from './store-rating.page';

const routes: Routes = [
  {
    path: '',
    component: StoreRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRatingPageRoutingModule { }
