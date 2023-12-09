import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const expectedRoles = next.data.roles;

    if (this.authService.isLoggedIn() && this.authService.isUserInRoles(expectedRoles)) {
      return true;
    } else {
      this.router.navigateByUrl("/client");
      return false;
    }
  }

}
