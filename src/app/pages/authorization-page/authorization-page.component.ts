import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VkAPIService } from "../../services/vk-api.service";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  constructor(private vkApi: VkAPIService, private router: Router) {
  }

  ngOnInit() {
    if( this.vkApi.getToken() ){
      this.router.navigate(['/main']);
    }
  }

}
