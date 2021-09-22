import { ApiServiceService } from './api.service.service';
import { Component } from "@angular/core";
import { userinsert } from "./user.module";
import { empty } from 'rxjs';



@Component({
  templateUrl: 'insertuser.component.html'
})
export class InsertuserComponent {
  insert = new userinsert();

  constructor(private apiServiceService: ApiServiceService) {
  }

  insertuser(){
    console.log(this.insert);

    this.apiServiceService.addusers(this.insert).subscribe(res=>{
      console.log(res);
    })
  }

}
