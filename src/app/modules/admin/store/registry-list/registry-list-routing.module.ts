import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistryListComponent } from './registry-list.component';

const routes: Routes = [{path: '', component: RegistryListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistryListRoutingModule { }
