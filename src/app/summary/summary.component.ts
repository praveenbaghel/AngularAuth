import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  // loginRecords:any = localStorage.getItem('loginRecords');
  email:string ="email"
  totalTime:number= 12
  totalLogins:number =10
  data:any = localStorage.getItem('userLogs')
  usersLogs= JSON.parse(this.data)

  constructor() { }
   
}
