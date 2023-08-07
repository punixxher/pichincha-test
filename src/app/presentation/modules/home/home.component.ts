import { Component, OnInit } from '@angular/core';
import {AppSettings} from "../../shared/appsettings/appsetting";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assetRoutes = AppSettings.defaultAssetsRoute

  constructor() { }

  ngOnInit(): void {
  }


  addProduct(){
    debugger
  }




}
