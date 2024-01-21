import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCarrierComponent } from './update-carrier.component';

const routes: Routes = [{ path: '', component: UpdateCarrierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCarrierRoutingModule { }
