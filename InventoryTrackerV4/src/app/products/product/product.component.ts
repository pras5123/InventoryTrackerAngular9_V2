import { Component, OnInit } from '@angular/core';
//product service need to be imported into a specific component.
import { ProductService } from 'src/app/shared/product.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId=0;
  productForm : FormGroup;
  constructor(public service : ProductService, 
              public toastr: ToastrService,
              public activateRoute : ActivatedRoute,
              public router: Router,
              public formBuilder : FormBuilder
              ) 
              {         
                this.productForm = formBuilder.group({
                  productId : new FormControl(),
                  productName : ['', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
                  productPrice : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
                  productQuantity : ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
                  productCreatedDate : new FormControl()
                });
                
                this.activateRoute.params.subscribe( data=> {
                  this.productForm.value.productId = data.id;                                
                  this.service.getProductById(this.service.formData.productId).subscribe(result=> {
                    });
                });
              }

    ngOnInit() {
      this.productId = this.productForm.value.productId;
     if(this.productForm.value!=null && this.productForm.value.productId>0)
     {
       this.productForm.patchValue(
        {
          productId : this.service.formData.productId,
          productName: this.service.formData.productName , 
          productQuantity :this.service.formData.productQuantity , 
          productPrice :this.service.formData.productPrice
         } );
     }
     else
     {
         this.productForm.reset();
     }
    }
  
    clearForm()
    {
      this.productForm.reset();
    }
  
    onSubmit() {
        this.insertUpdateRecord(this.productForm);        
    }
  
    insertUpdateRecord(form: FormGroup) {
      this.service.postProduct(form.value).subscribe(res => {
        this.toastr.success('Product save/update successfull', '');
        this.productForm.reset();
        this.router.navigateByUrl('/products-list');
      });
    }

}
