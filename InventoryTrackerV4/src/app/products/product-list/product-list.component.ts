import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //productForm : FormGroup;
  
  constructor(public service: ProductService,
    public toastr: ToastrService, public router: Router
    ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(prd: Product) {
    this.service.formData = Object.assign({}, prd);
    this.router.navigate(['/products/',prd.productId]);
  }


  updateRecord(form: NgForm) {
    this.service.postProduct(form.value).subscribe(res => {
      this.toastr.success('Product Updated successfully', 'Product-Update');
      this.service.refreshList();
    });
  }
}
