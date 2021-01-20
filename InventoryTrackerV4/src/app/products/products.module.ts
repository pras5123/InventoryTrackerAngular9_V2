import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
//import { ProductsComponent } from './products.component';
//import { ProductComponent } from './product/product.component';
//import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],  
  // ProductsComponent, ProductComponent, ProductListComponent
  imports: [
    //BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule
   
  ]
})
export class ProductsModule { }
