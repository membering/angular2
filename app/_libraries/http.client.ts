import { Injectable, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Config } from '../config';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClient {
    apiUrl: string;

    constructor(private config: Config, private http: AuthHttp) {
        this.apiUrl = config.get('apiUrl');
    }

    get(url) {
        return this.http.get(this.apiUrl + url).map((response: Response) => response.json());
    }

    post(url, data = null) {
        return this.http.post(this.apiUrl + url, data).map((response: Response) => response.json());
    }
}