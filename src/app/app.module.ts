import { NgModule, APP_INITIALIZER }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AUTH_PROVIDERS }   from 'angular2-jwt';

import { Config } from './config';
import { AppComponent } from './components/app.component';
import { AppRoutes } from './app.routes';

import { AuthGuard } from './_guards/index';
import { HttpClient } from './_libraries/index';
import { AlertService, AuthService, UserService, CardService } from './services/index';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { LoginComponent } from './components/login/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutes,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        Config, {
            provide: APP_INITIALIZER,
            useFactory: (config: Config) => () => config.load(),
            deps: [Config],
            multi: true
        },
        AUTH_PROVIDERS,
        AuthGuard,
        HttpClient,
        AlertService,
        AuthService,
        UserService,
        CardService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }