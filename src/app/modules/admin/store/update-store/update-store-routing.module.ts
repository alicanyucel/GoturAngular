import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStoreComponent } from './update-store.component';

const routes: Routes = [{ path: '', component: UpdateStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateStoreRoutingModule { }
