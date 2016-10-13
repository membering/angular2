import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { Constants } from './app.constants';
import { HttpClient } from './_libraries/http.client';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthService, UserService } from './_services/index';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutes
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        Constants,
        AuthGuard,
        HttpClient,
        AlertService,
        AuthService,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }