import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-routing.module';
import { UserModuleComponent } from './user.component';
import { MyMaterialModule } from 'src/@shared/modules/material.modules';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserModuleComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    MyMaterialModule,
    FormsModule
  ]
})
export class UserModuleModule { }
