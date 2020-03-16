import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VkAPIService {

  public API_SERVER = "https://api.vk.com/method";
  public ACCESS_TOKEN = "4694dd9c243320930c26be49d551e44228a7b30643632bd84bf8d6f631994afb7ca44b71d966f3e7879a2";

  constructor(private httpClient: HttpClient) {}

  getFriends(): Observable<any>{
    return this.httpClient.get<any>(`${this.API_SERVER}/friends.search?count=5&fields=photo_100&access_token=${this.ACCESS_TOKEN}&v=5.52`);
  }

}
