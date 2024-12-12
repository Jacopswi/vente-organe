import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganesListPageRoutingModule } from './organes-list-routing.module';

import { OrganesListPage } from './organes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganesListPageRoutingModule
  ],
  declarations: [OrganesListPage]
})
export class OrganesListPageModule {}
