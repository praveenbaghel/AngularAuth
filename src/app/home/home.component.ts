import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data:any =localStorage.getItem('user');
  user = JSON.parse(this.data);
  role = this.user.role;
  constructor(private router: Router) {}

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    
  }

}
