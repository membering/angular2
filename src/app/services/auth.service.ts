import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Config } from '../config';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    apiUrl: string;

    constructor(
        private http: Http,
        private config: Config
    ) {
        this.apiUrl = config.get('apiUrl');
    }

    login(email, pwd) {
        var data = {
            email: email,
            pwd: pwd
        };
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.apiUrl + '/auth/login', data).map((response: Response) => response.json());
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }
}