import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
// import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ProductModule
  ]
})
export class MainModule { }
