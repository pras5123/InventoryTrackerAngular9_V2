import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData : Product;
  list : Product[];
  readonly rootURL ="https://localhost:44306/Api"
  constructor(private http : HttpClient) { }

  postProduct(formData : Product){
    console.log("inside post");
    return this.http.post(this.rootURL+'/Inventory/AddUpdateProduct',formData);
     
   }
 
   refreshList(){
     this.http.get(this.rootURL+'/Inventory/GetProduct')
     .toPromise().then(res => this.list = res as Product[]);
   }
 
   getProductById(id : number){
    this.http.get(this.rootURL+'/Inventory/GetProductById/'+id)
    .toPromise().then(res => this.formData = res as Product);
  }
   
  //  putProduct(formData : Product){
  //    return this.http.post(this.rootURL+'/Inventory/AddUpdateProduct/'+formData.productId,formData);
      
  //   }
 
    deleteEmployee(id : number){
     return this.http.delete(this.rootURL+'/Inventory/DeleteProduct/'+id);
    }
}
