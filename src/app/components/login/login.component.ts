import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm?: any;
  date: string | number | Date | undefined;


constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router,
  private toastr: ToastrService,
) 
{ this.date= new Date()}
ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}

  onSubmit(): void {
  if (this.loginForm.valid) {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    //Call the authentication service's login method
    if (this.authService.login(username, password)){
      //Navigate to the ProductListComponent upon successful login
      this.router.navigate(['/dashboard']);
    }else {
      //Handle authentication error (show error message)
      this.toastr.error('username and password does match!', 'error!')
    }
  }
}
}
