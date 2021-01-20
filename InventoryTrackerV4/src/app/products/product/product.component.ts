import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId=0;
  constructor(public service : ProductService, 
              public toastr: ToastrService,
              public activateRoute : ActivatedRoute,
              public router: Router) {
                this.activateRoute.params.subscribe( data=> {
                  this.productId = data.id;                
                })
              }

    ngOnInit() {
      this.resetForm();
    }
  
    clearForm()
    {
      this.service.formData = 
      {
          productId : 0,
          productName : '',
          productPrice  : 0,
          productQuantity : 0 ,
          productCreatedDate : ''
      }
    }
    resetForm(form? : NgForm) 
    {
      if(form!=null)    
      form.resetForm();  
      if(this.productId>0)
      {
        this.service.getProductById(this.productId);
      }
      else
      {
          this.service.formData = 
          {
              productId : 0,
              productName : '',
              productPrice  : 0,
              productQuantity : 0 ,
              productCreatedDate : ''
          }
      }
    }
  
  
    onSubmit(form: NgForm) {
        this.insertUpdateRecord(form);
        
    }
  
    insertUpdateRecord(form: NgForm) {
      this.service.postProduct(form.value).subscribe(res => {
        this.toastr.success('Product save/update successfull', '');
        this.resetForm(form);
        this.router.navigateByUrl('/products-list');
        //this.service.refreshList();
      });
    }

}
