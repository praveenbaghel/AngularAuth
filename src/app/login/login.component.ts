import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  

  constructor(private authService: AuthService) {}

   onSubmit() {
     this.authService.login(this.email, this.password);
    //  this.authService.saveUserLogs(this.email)
       
  }
}
