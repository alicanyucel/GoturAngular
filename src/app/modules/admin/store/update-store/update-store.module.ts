import { StoreUpdateService } from './update-store.service';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'app/shared/shared.module';
import { UpdateStoreComponent } from './update-store.component';
import { MatDividerModule } from '@angular/material/divider';
import { UpdateStoreRoutingModule } from './update-store-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { FileUploadService } from 'app/shared/file-upload/file-upload.service';
import * as L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
    declarations: [
        UpdateStoreComponent
    ],
    imports: [
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        LeafletModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        UpdateStoreRoutingModule,
        MatSelectModule,
        MatIconModule,
        SharedModule,
        MatSnackBarModule,
        HttpClientModule,
    ],
    exports: [],
    providers: [StoreUpdateService,FileUploadService],
})
export class UpdateStoreModule { }
