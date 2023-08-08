import {Component, OnInit} from '@angular/core';
import {AppSettings} from "../../shared/appsettings/appsetting";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assetRoutes = AppSettings.defaultAssetsRoute


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  async addProduct() {
    void this.router.navigate(['/registro'])
    /*const request = {
      id: 'tere',
      name: 'dasasdasd',
      description: 'adssadadsads',
      logo: 'asasasaSa',
      date_release: new Date(),
      date_revision: new Date()
    }


    const response = await ProductsController.setProduct(request)*/

  }


}
