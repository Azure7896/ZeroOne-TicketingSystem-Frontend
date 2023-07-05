import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isMenuOpen = false;

  public refresh = true;

}
