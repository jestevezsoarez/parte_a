import { Component, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  moduleNames: string[] = [];

  @Output() moduleSelected;


  constructor( private _usersService: UsersService ) {
      this.moduleSelected = new EventEmitter();
      this.moduleNames = this._usersService.getModuleNames();      
      
  }

  showModules(name: string) {    
    
    this.moduleSelected.emit(name);
  }

}
