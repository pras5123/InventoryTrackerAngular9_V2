import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { SecurityGuard } from './security.guard';


const routes: Routes = [
  //Redirecting routes : Default route to login implemtation
  {path:'',redirectTo:'login',pathMatch:'full'},
  // Lazy loading in Routing. loading based on demand + using guards for the components.
   {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canActivate: [SecurityGuard]  },
   {path : 'products-list', component : ProductListComponent, canActivate: [SecurityGuard] },
   //Parameterized routes
   {path : 'products/:id', component:ProductComponent, canActivate: [SecurityGuard] },
   {path : 'login', component : LoginComponent},
   //Wild Card routes : Page not found implementation
   {path : '**', component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
