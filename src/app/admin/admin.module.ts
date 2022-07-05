import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MyMaterialModule } from 'src/app/@shared/modules/material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MyMaterialModule,
    FormsModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
