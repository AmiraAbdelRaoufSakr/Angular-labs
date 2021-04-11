import { Component } from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {
  message: string;

  users: User[] = [
    
     { name: 'Amira', age:23, job:'Student' },
     { name: 'Omar', age:26, job:'doctor' },
     { name: 'Sakr', age:30, job:'engineer' },
     { name: 'Ahmed', age:12,  },
     { name: 'Yehia', age:50, job:'developer' },
     { name: 'AbdelFatah', age:22, }

    
  ];
  receiveMessage(msg) {
    this.message = msg;
  }
}
