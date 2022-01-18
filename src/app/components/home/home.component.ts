import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: string[] = [];

  constructor( private _usersService: UsersService ) { }

  ngOnInit(): void {
  }


  showUsers(selection: string[]) {    
    
    while(selection.length > 2) {
      selection.shift();
    }
    
    this.users = this._usersService.getUsers(selection[0], selection[1]);    
    
  }

}
