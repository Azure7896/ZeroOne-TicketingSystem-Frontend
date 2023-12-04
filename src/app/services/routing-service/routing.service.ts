import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`], { replaceUrl: true });
  }

  getTicketNameFromActivatedRoute() {
    return this.activatedRoute.snapshot.paramMap.get('ticketnumber');
  }

}
