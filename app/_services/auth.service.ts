import { Injectable } from '@angular/core';
import { HttpClient } from '../_libraries/http.client';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login(email, pwd) {
        var data = {
            email: email,
            pwd: pwd
        };
        return this.http.post('/auth/login', data);
    }

    logout() {
        localStorage.removeItem('token');
    }
}