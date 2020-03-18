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
    this.checkToken();
  }

  ngOnInit(){
  }

  checkToken(){
    let reg = new RegExp("access_token=(.*)&expires_in", "g");
    let urlMatch = reg.exec(this.router.url);

    if( urlMatch ){
      let urlToken = urlMatch[1];
      this.vkApi.setToken(urlToken);
      this.router.navigateByUrl('/main');  //hide url token
    }

    if( !this.vkApi.getToken() ){
      this.router.navigateByUrl('/authorization');
    }
  }

}
