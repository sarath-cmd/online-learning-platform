import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilemenuService {
  private menuoSubject = new BehaviorSubject<boolean>(false);
  ismenuo$ = this.menuoSubject.asObservable();

  cms() {
    const currentstate = this.menuoSubject.value;
    this.menuoSubject.next(!currentstate);
  }
}
