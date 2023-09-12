import {Component} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-loading-failed',
  templateUrl: './loading-failed.component.html',
  styleUrls: ['./loading-failed.component.css']
})
export class LoadingFailedComponent {

  details = false;

  constructor(public sharedService: SharedService) {

  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
