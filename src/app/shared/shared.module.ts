import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryStatusPipe } from './pipes/registry-status.pipe';

@NgModule({
    declarations: [
        RegistryStatusPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegistryStatusPipe
    ]
})
export class SharedModule { }
