import { Component } from '@angular/core';
import {FailureService} from "../../services/failure-service/failure.service";
import {FailureInfo} from "../../classes/failure-info";

@Component({
  selector: 'app-general-failure',
  templateUrl: './general-failure.component.html',
  styleUrls: ['./general-failure.component.css']
})
export class GeneralFailureComponent {

  failuresList: FailureInfo[];

  constructor(private failureInfoService: FailureService) {
  }

  ngOnInit() {
    this.fetchActiveFailures();
  }

  fetchActiveFailures() {
    this.failureInfoService.getAllActiveFailures().subscribe(data => {
        setTimeout(() => {
            this.failuresList = data;
            // this.showLoading = false;
          },
          1000);
      },
      err => {
        // this.showError()
        // this.sharedService.error = err;
      })
  }
}
