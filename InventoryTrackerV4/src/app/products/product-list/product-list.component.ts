import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public service: ProductService,
    public toastr: ToastrService, public router: Router) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(prd: Product) {
    this.service.formData = Object.assign({}, prd);
    console.log("logging the values");
    this.router.navigateByUrl('/products/'+prd.productId);
  }


  updateRecord(form: NgForm) {
    this.service.postProduct(form.value).subscribe(res => {
      this.toastr.success('Product Updated successfully', 'Product-Update');
      //this.resetForm(form);
      this.service.refreshList();
    });
  }
}
