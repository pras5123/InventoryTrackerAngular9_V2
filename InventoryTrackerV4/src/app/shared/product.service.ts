import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from './product.model';
//post , get, put, delete - is available in HttpClient - we need to import it in the service
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productForm : FormGroup;
  formData : Product;
  list : Product[];
  readonly rootURL ="https://localhost:44306/Api"

  constructor(private http : HttpClient) { }
  //inject httpClient in the constructor
  postProduct(formData : Product){
    console.log("inside post");
    return this.http.post(this.rootURL+'/Inventory/AddUpdateProduct',formData);
     
   }
   //This will return observable. so we need to subscribe from the calling method.
   refreshList(){
     this.http.get(this.rootURL+'/Inventory/GetProduct')
     .toPromise().then(res => this.list = res as Product[]);
   }
 
   getProductById(id){
    return this.http.get(this.rootURL+'/Inventory/GetProductById/'+id);
    //.toPromise().then(res => this.formData = res as Product);
  }
   
  //  putProduct(formData : Product){
  //    return this.http.post(this.rootURL+'/Inventory/AddUpdateProduct/'+formData.productId,formData);
      
  //   }
 
    deleteEmployee(id : number){
     return this.http.delete(this.rootURL+'/Inventory/DeleteProduct/'+id);
    }
}
