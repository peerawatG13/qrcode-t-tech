import { ActivatedRoute, ParamMap } from '@angular/router';
import { routes } from './../../app.routing';
import { Component ,OnInit } from "@angular/core";


@Component({
  templateUrl: 'business.page.html',
  styleUrls: ['./business.page.scss']

})
export class BusinessPage {
  id:any;
  dataU:any;


  constructor(private route:ActivatedRoute) { }

  ngOnInit(){
  }

}
