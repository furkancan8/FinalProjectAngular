import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/User/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  //router farklı sayfaya yönlendirmek için kullanılır,gidilen adresi söyler//state gidilicek adresi söyler
  constructor(private authService:AuthService,private router:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticate())
    {
      return true;
    }else{
      this.router.navigate(["login"])//login route elamanına yönlendirir.route'de tanımlanır
      console.log("sisteme giriş yapmalısınız")
      return false;
    }
  }

}
