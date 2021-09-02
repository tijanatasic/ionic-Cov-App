import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  data=[];
  myDate: String = new Date().toISOString();

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCovidInfo().subscribe((res=>{
      this.data=res;
      console.log(this.data);
    }));
  }

}
