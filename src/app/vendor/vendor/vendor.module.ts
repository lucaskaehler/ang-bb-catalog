import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { MyMaterialModule } from 'src/app/@shared/modules/material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    VendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    MyMaterialModule,
    FormsModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class VendorModule { }
