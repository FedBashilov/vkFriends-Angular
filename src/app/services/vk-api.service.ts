import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VkAPIService {

  public API_SERVER = "https://api.vk.com/method";

  constructor(private httpClient: HttpClient) {
  }

  setToken(access_token){
    let data: any = new Object;
    let deathDate = new Date().valueOf()+10000;

    data.deathDate = deathDate;
    data.access_token = access_token;

    let serialData = JSON.stringify(data);

    localStorage.removeItem("access_token");
    //localStorage.setItem("access_token", serialData);
  }

  getToken(){
    return JSON.parse(localStorage.getItem("access_token"));
  }


  getFriends(): Observable<any>{
    let token = this.getToken().access_token;
    return this.httpClient.get<any>(`${this.API_SERVER}/friends.search?count=5&fields=photo_100&access_token=${token}&v=5.52`);
  }

}
