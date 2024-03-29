import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy  {
  
  isLoggedIn: boolean;
  private __authSub: Subscription;

  @Input() user;
 @Output () messageEvent = new EventEmitter<string>();


  constructor(private __authService: AuthService, private _router: Router){}

  ngOnInit(): void {
    this.__authSub =  this.__authService.authSubjectObservable.subscribe((data: boolean) =>{
      console.log(data);
      this.isLoggedIn = data;
    })
  }

 
  sendMessage(): void{
    this.messageEvent.emit(`You have clicked on ${this.user.name}.`)
    this._router.navigate(['/users'], {
      queryParams: {
        age: this.user.age,
        name: this.user.name

      },
      queryParamsHandling: 'merge'
    });
  }
   ngOnDestroy(): void{
     this.__authSub.unsubscribe();
   }
}
