import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FailureService } from '../../services/failure.service';
import { DateAdapter } from '@angular/material/core';
import {FailureInfo} from "../../classes/failure-info";

@Component({
  selector: 'app-failure-setting',
  templateUrl: './failure-setting.component.html',
  styleUrls: ['./failure-setting.component.css']
})
export class FailureSettingComponent {

  showLoading: boolean = true;
  loadingFailed = false;

  public editor = ClassicEditor;
  failureCreatedStatus: string;
  time = 1;
  failuresList: FailureInfo[];

  failureForm = new FormGroup({
    failureTitle: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    additionalInfo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    failureStart: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    failureEnd: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
  });

  constructor(
    public sharedService: SharedService,
    public router: Router,
    private failureInfoService: FailureService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('pl-PL');
  }

  ngOnInit() {
    this.fetchFailures()
    this.failuresList.forEach((item, index) => {
      // You can perform operations on each item here
      console.log(`Item at index ${index}: ${item}`);
    });
  }

  getErrorMessage(field): string {
    if (field.hasError('required')) {
      return 'Pole jest puste, podaj wartość';
    } else {
      return 'Niepoprawna ilość znaków';
    }
  }

  getDatePickerErrorMessage(field): string {
    if (field.hasError) {
      return 'Wybierz datę za pomocą kalendarza';
    }
  }

  showFailureCreatedInfo() {
    this.failureCreatedStatus = 'successful';
    this.ngOnInit();
  }

  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }

  fetchFailures() {
    this.failureInfoService.getAllFailures().subscribe(data => {
        setTimeout(() => {
            this.failuresList = data;
            this.showLoading = false;
          },
          1000);
      },
      err => {
        this.showError()
        this.sharedService.error = err;
      })
  }

  updateFailure(failureId): void {

    this.failureInfoService.updateStatus(failureId).subscribe(
      (response) => {
      },
      err => {

      }
    );
    setTimeout(() => {
        this.ngOnInit();
      },
      1500);
  }


  createNewFailure(): void {
    this.failureInfoService.saveFailure(this.failureForm).subscribe(response => {
        this.showFailureCreatedInfo()
      },
      err => {
        this.failureCreatedStatus = "fail"
      })
  }

}
