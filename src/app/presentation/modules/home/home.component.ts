import {Component, inject, OnInit} from '@angular/core';
import {AppSettings} from "../../shared/appsettings/appsetting";
import {ProductsController} from "../../../infraestructure/controllers/products/products.controller";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assetRoutes = AppSettings.defaultAssetsRoute


  constructor() {
  }

  ngOnInit(): void {
  }


  async addProduct() {
    const request = {
      id: 'tere',
      name: 'dasasdasd',
      description: 'adssadadsads',
      logo: 'asasasaSa',
      date_release: new Date(),
      date_revision: new Date()
    }


    const response = await ProductsController.setProduct(request)

  }


}
