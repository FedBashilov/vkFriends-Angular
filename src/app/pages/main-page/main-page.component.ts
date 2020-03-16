import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FriendsListComponent } from "../../components/friends-list/friends-list.component";
import { VkAPIService } from "../../services/vk-api.service";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private vkApi: VkAPIService, private router: Router){
  }

  ngOnInit(){
    //обрезаем url
    let token = this.vkApi.getToken();
    console.log("token", token);

    let reg = new RegExp("access_token=(.*)&expires_in", "g");
    let urlToken = reg.exec(this.router.url)[1];
    console.log("url token", urlToken);
let nowDate = new Date().valueOf();
    console.log(token.deathDate, nowDate);

    if( token ) {
      if( nowDate >= token.deathDate){
        if(token.access_token == urlToken){
          //needNewToken
          window.location.href = "https://oauth.vk.com/authorize?client_id=7358012&display=page&redirect_uri=http://localhost:4200/main&scope=friends&response_type=token&v=5.52";
        } else {
          //setNewToken
          this.vkApi.setToken(urlToken);
        }
      }
    } else if(urlToken){
        this.vkApi.setToken(urlToken);
    } else{
      this.router.navigate(['/authorization']);
    }
  }

}
