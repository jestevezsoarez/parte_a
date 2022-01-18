import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';

// Services
import { UsersService } from './services/users.service';
import { ModuleNavbarComponent } from './components/shared/module-navbar/module-navbar.component';
import { FormatoPipe } from './pipes/formato.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModuleNavbarComponent,
    FormatoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
