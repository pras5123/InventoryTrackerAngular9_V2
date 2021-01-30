import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from './shared/login.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(public service: LoginService, public toastr: ToastrService ,public router: Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      //Authentication and Authorization code here.
      if(this.service.formLogin!=null &&  this.service.formLogin.userName=='admin' && this.service.formLogin.password=='admin')
      {
        return true;
      }
      else
      {
        this.router.navigateByUrl('/login');
        return false;
      }    
  }
  
}
