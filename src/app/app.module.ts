import {inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/modules/home/home.component';
import {SharedModule} from "./presentation/shared/components/shared.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './presentation/modules/register/register.component';
import { HeaderComponent } from './presentation/layout/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
