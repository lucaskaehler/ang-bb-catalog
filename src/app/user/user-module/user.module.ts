import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-routing.module';
import { UserModuleComponent } from './user.component';
import { MyMaterialModule } from 'src/@shared/modules/material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    UserModuleComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    MyMaterialModule,
    FormsModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class UserModuleModule { }
