import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganesFormPageRoutingModule } from './organes-form-routing.module';

import { OrganesFormPage } from './organes-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganesFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OrganesFormPage]
})
export class OrganesFormPageModule {}
