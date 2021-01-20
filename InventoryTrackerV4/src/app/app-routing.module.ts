import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';


const routes: Routes = [
   //{path:'',redirectTo:'products-list',pathMatch:'full'},
   {path:'',redirectTo:'login',pathMatch:'full'},
   { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
   {path : 'products-list', component : ProductListComponent},
   {path : 'products/:id', component:ProductComponent},
   {path : 'login', component : LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
