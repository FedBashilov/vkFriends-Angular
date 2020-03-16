import { Component, OnInit } from '@angular/core';

import { VkAPIService } from "../../services/vk-api.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends = [];

  constructor(private vkApi: VkAPIService){

  }

  ngOnInit(){
    this.getFriends();
  }

  getFriends(){
    this.vkApi.getFriends().subscribe( (friends: any) => {
      this.friends = friends.response.items;
      console.log(this.friends);

    });
  }
}
