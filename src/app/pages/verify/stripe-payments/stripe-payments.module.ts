
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripePaymentsPageRoutingModule } from './stripe-payments-routing.module';

import { StripePaymentsPage } from './stripe-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripePaymentsPageRoutingModule
  ],
  declarations: [StripePaymentsPage]
})
export class StripePaymentsPageModule { }
