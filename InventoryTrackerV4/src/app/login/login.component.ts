import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service : LoginService,
    public activateRoute : ActivatedRoute,
              public router: Router,
              public toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.resetForm(); 
  }

  resetForm(form? : NgForm) 
    {
      this.service.formLogin = 
      {
        userName : '' ,
        password  :''
      }
    }

    onSubmit(form: NgForm) {
      if(this.service.formLogin != null && this.service.formLogin.userName == 'admin' && this.service.formLogin.password == 'admin')
      {
        this.router.navigateByUrl('/products-list');
      }
      else
      {
        this.toastr.error('Invalid username or password', '');
      }
      
  }



 
}
