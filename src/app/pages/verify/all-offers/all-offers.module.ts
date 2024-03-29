
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllOffersPageRoutingModule } from './all-offers-routing.module';

import { AllOffersPage } from './all-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllOffersPageRoutingModule
  ],
  declarations: [AllOffersPage]
})
export class AllOffersPageModule { }
