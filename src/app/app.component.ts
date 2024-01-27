import { Component } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-commerce';

  sidebarOpened:boolean = true;

  constructor(
    private authServise: AuthService,
  ){

  }
  isLoggedIn(): boolean{
    return this.authServise.isAuthenticatedUser();
  }
  toggleSideBar(){
    this.sidebarOpened = !this.sidebarOpened;
  }
}
