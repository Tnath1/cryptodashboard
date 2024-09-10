import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenavOpenSubject = new BehaviorSubject<boolean>(false); 
  sidenavOpen$ = this.sidenavOpenSubject.asObservable();

  toggleSidenav() {
    const currentState = this.sidenavOpenSubject.value; 
    this.sidenavOpenSubject.next(!currentState); 
    // console.log('Toggling sidenav, new state:', !currentState); 
  }


  
}
