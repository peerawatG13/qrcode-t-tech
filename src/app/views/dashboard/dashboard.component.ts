import { ApiServiceService } from './api.service.service';
import { routes } from './../../app.routing';
import { Component, OnInit } from '@angular/core';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';

// import เชื่อหน้า
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataUser:any = 1;
  constructor(public http: HttpClient,
              private nativehttp:HttpClient,
              private activatedRoute: ActivatedRoute,
              private routes: Router,
              private apiservicservice : ApiServiceService) {
   }

  ngOnInit(): void {
    // this.nativehttp.get(this.configUrl).subscribe(res=>{
    //   this.dataUser = res;
    //   console.log(this.dataUser);
    // })
    // this.apiservicservice.getusers().subscribe(res=>{
    //   this.dataUser = res;
    //   console.log(this.dataUser);
    // });
  }

  Gobusiness(){
    this.routes.navigate(['/theme/business',{id: this.dataUser ,}]);
    console.log(
      this.dataUser
    )
  }
}
