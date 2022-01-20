import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: string[] = [];
  moduleNumber: number;
  show: boolean = false;

  constructor( private _usersService: UsersService ) { }

  ngOnInit(): void {
  }


  showUsers(selection: string[]) {    
    
    while(selection.length > 2) {
      selection.shift();
    }

    let regex = /(\d+)/g;

    let str = selection[1].match(regex);
    let numero = parseInt(str[0]);
    this.moduleNumber = numero;
    
    
    this.users = this._usersService.getUsers(selection[0], selection[1]);
    this.show = true;
    
  }

}
