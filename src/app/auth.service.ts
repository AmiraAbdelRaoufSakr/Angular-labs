import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private __authSubject = new BehaviorSubject<boolean>(false);

  get authSubjectObservable() {
    return this.__authSubject.asObservable();

  }
  broadcastAuthValue(value: boolean): void {
    this.__authSubject.next(value);
  }
}
