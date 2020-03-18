import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VkAPIService {

  public API_SERVER = "https://api.vk.com";

  constructor(private httpClient: HttpClient) {
  }

  setToken(access_token){
    localStorage.setItem("access_token", access_token);
  }

  getToken(){
    return localStorage.getItem("access_token");
  }

  getFriends(): Observable<any>{
    let token = this.getToken();
    return this.httpClient.jsonp<any>(`${this.API_SERVER}/method/friends.search?count=5&fields=photo_100&access_token=${token}&v=5.52`, "callback");
  }

  getCurrentUserInfo(): Observable<any>{
    let token = this.getToken();
    return this.httpClient.jsonp<any>(`${this.API_SERVER}/method/users.get?fields=photo_100&access_token=${token}&v=5.103`, "callback");
  }

}
