import { Component, OnInit } from '@angular/core';

import { FriendsListComponent } from "../../components/friends-list/friends-list.component";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //обрезаем url
  }

}
