import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryListRoutingModule } from './registry-list-routing.module';
import { RegistryListComponent } from './registry-list.component';
import { RegistryListService } from './registry-list.service';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { TableScrollWrapperModule } from 'app/layout/common/table-scroll-wrapper/table-scroll-wrapper.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    RegistryListComponent,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    SharedModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    TableScrollWrapperModule,
    RegistryListRoutingModule,
  ],
  providers: [RegistryListService]
})
export class RegistryListModule { }
