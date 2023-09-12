import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  ngOnInit() {
  }

  //Show menu

  public isMenuOpen = false;

  //Enable refreshing

  public refresh = true;


  public isOptionOpen = false;

  public error;

  //Login page is showing

  isOnLoginPage = true;

  loadingFailed: boolean;

  showLoading: boolean;

}

