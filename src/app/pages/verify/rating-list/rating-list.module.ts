
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingListPageRoutingModule } from './rating-list-routing.module';

import { RatingListPage } from './rating-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingListPageRoutingModule
  ],
  declarations: [RatingListPage]
})
export class RatingListPageModule { }
