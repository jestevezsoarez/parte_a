import { Component, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-module-navbar',
  templateUrl: './module-navbar.component.html',
  styleUrls: ['./module-navbar.component.css']
})
export class ModuleNavbarComponent{

  authModules       : string[] = [];
  contentModules    : string[] = [];

  showAutModules    : boolean = false;
  showContentModules: boolean = false;

  users: string[] = [];
  userSelection: string[] = [];

  @Output() userSelected;

  constructor( private _usersService: UsersService ) {
    this.authModules = this._usersService.getAuthModules();

    this.contentModules = this._usersService.getContentModules();
    //console.log(this.contentModules);
        
    this.userSelected = new EventEmitter();
   }


   showModules(name: string) {
     
     this.userSelection.push(name);     
    
     if (name === 'content_module') {
       this.showContentModules = true;
       this.showAutModules     = false;       
       
     }

     if (name === 'auth_module') {
       this.showContentModules = false;
       this.showAutModules     = true;
     }
   }


   showUsers(provider: string) {
    
    this.userSelection.push(provider);    
    
    this.userSelected.emit(this.userSelection);
    this.userSelection.pop();

   }

}
