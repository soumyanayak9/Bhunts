
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopStoresPage } from './top-stores.page';

const routes: Routes = [
  {
    path: '',
    component: TopStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopStoresPageRoutingModule { }
