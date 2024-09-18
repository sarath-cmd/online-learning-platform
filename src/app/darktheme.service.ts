import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkthemeService {
  private isDarkSubject = new BehaviorSubject<boolean>(false);
  isDark$ = this.isDarkSubject.asObservable();

  changeTheme() {
    const currentTheme = this.isDarkSubject.value;
    this.isDarkSubject.next(!currentTheme);
  }
}
