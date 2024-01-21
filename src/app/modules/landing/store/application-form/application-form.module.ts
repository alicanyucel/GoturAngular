import { StoreApplicationService } from './application-form.service';
import { NgModule} from '@angular/core';
import { MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { SharedModule } from 'app/shared/shared.module';
import { ApplicationFormComponent } from './application-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ApplicationFormRoutingModule } from './application-form-routing.module';

@NgModule({
	declarations: [
		ApplicationFormComponent
	],
	imports: [
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ApplicationFormRoutingModule,
        MatSelectModule,
        SharedModule,
        MatSnackBarModule,
		HttpClientModule,
	],
	exports: [],
	providers: [StoreApplicationService],
})
export class ApplicationFormModule { }
