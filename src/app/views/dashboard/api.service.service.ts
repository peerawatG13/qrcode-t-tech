import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class ApiServiceService {
    configUrl = "http://localhost:8000/Users";
   constructor( private httpClient: HttpClient) {
   }
  getusers(){
    return this.httpClient.get(this.configUrl);
  }

  addusers(userinsert){
    return this.httpClient.post('http://localhost:8000/Addusers/',userinsert);
  }
}
