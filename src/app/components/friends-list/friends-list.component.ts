import { Component, OnInit } from '@angular/core';

import { VkAPIService } from "../../services/vk-api.service";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  public friends: User[] = [];

  constructor(private vkApi: VkAPIService){
  }

  ngOnInit(){
    this.getFriends();
  }

  getFriends(){
    this.vkApi.getFriends().subscribe( (friends: any) => {
      this.friends = friends.response.items;
    });
  }
}
