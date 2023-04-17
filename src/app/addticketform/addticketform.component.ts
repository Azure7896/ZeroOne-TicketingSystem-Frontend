import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {tick} from "@angular/core/testing";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
@Component({
  selector: 'app-addticketform',
  templateUrl: './addticketform.component.html',
  styleUrls: ['./addticketform.component.css']
})
export class AddticketformComponent {

  public Editor = ClassicEditor;

ticketForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    body: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
  })

  getErrorMessage(field): string {
    if (field.hasError('required')) {
      return 'Pole jest puste, podaj wartość';
    } else {
      return 'Niepoprawna ilość znaków'
    }
  }

  protected readonly tick = tick;
}
