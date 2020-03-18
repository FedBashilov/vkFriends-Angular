import { Component, OnInit } from '@angular/core';

import { VkAPIService } from "../../services/vk-api.service";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  public user: User = new User;

  constructor(private vkApi: VkAPIService) {
  }

  ngOnInit() {
    this.getuserInfo();
  }

  getuserInfo(){
    this.vkApi.getCurrentUserInfo().subscribe( (user: any) => {
      this.user = user.response[0];
    });
  }
}
