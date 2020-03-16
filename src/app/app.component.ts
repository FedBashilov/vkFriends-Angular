import { Component } from '@angular/core';

import { VkAPIService } from "./services/vk-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vkFriends';
  friends = '';

  constructor(private vkApi: VkAPIService){

  }

  getFriends(){
    this.vkApi.getFriends().subscribe( (friends: any) => {
      this.friends = friends;
      console.log(this.friends);

    });

  }
}
