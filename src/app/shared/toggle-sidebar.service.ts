import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {

  private toggleSidebarSubject = new Subject<boolean>();
  toggleSidebar$ = this.toggleSidebarSubject.asObservable();

  toggleSidebar(isOpen: boolean) {
    this.toggleSidebarSubject.next(isOpen);
  }
}
