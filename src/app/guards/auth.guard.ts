import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs'
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private _authService: AuthService) { }
    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (localStorage.getItem('token') && localStorage.getItem('username') && this._authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}