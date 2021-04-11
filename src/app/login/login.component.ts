import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy  {

  userName: String = '';
  name: String = '';
  isLoggedIn: boolean;
  private __authSub: Subscription; 

  constructor(private __authService: AuthService){
   
  }
  ngOnInit(): void {
    this.__authSub = this.__authService.authSubjectObservable.subscribe((data: boolean) =>{
     console.log(data);
     this.isLoggedIn = data;
   })

  }
  onInput() : void {

  }
  login(): void {
   // this.isLoggedIn = true;
  
    
   this.__authService.broadcastAuthValue(true);
  }
  logout(): void {
    this.userName = '';
    this.__authService.broadcastAuthValue(false);
    this.isLoggedIn = false;
  }

  ngOnDestroy() {
    this.__authSub.unsubscribe();
  }
    
  

}
