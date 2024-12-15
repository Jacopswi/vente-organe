import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganesFormPage } from './organes-form.page';

const routes: Routes = [
  {
    path: '',
    component: OrganesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganesFormPageRoutingModule {}
