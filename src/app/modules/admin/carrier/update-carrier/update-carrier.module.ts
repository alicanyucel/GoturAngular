import { CarrierUpdateService } from './update-carrier.service';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'app/shared/shared.module';
import { UpdateCarrierComponent } from './update-carrier.component';
import { MatDividerModule } from '@angular/material/divider';
import { UpdateCarrierRoutingModule } from './update-carrier-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatFormFieldModule} from '@angular/material/form-field';
import { FileUploadService } from 'app/shared/file-upload/file-upload.service';

@NgModule({
	declarations: [
		UpdateCarrierComponent
	],
	imports: [
        MatSidenavModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatCardModule,
        MatListModule,MatToolbarModule,
        MatInputModule,
        UpdateCarrierRoutingModule,
        MatSelectModule,
        SharedModule,
        MatSnackBarModule,
		HttpClientModule,
	],
	exports: [],
	providers: [CarrierUpdateService,FileUploadService],
})
export class UpdateCarrierModule { }
