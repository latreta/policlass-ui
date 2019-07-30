import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(!this.userService.isLogged()){
            this.router.navigate([''], {
                queryParams: {
                    fromUrl: state.url
                }
            });
            return false;
        }
        return true;
    }

}