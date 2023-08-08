import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalService} from "./presentation/shared/services/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pichincha-test';

  constructor(private router: Router, private globalService: GlobalService) {

  }
}
