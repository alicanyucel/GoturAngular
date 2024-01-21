import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveMapComponent } from './live-map.component';

const routes: Routes = [{path: '', component: LiveMapComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveMapRoutingModule { }
