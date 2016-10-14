import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { provideAuth }   from 'angular2-jwt';

import { AppComponent } from './components/app.component';
import { AppRoutes } from './app.routes';

import { AuthGuard } from './_guards/index';
import { HttpClient } from './_libraries/index';
import { AlertService, AuthService, UserService } from './services/index';

import { AlertComponent } from './_directives/index';
import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/auth/index';

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
        provideAuth({
            headerName: 'x-access-token',
            tokenName: 'jwt-token',
            noJwtError: true,
            noTokenScheme: true
        }),
        AuthGuard,
        HttpClient,
        AlertService,
        AuthService,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }