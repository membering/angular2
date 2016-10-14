import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClient {
    constructor(private http: AuthHttp) { }

    public API_URL = 'http://api.fastcard.vn';

    get(url) {
        return this.http.get(this.API_URL + url).map((response: Response) => response.json());
    }

    post(url, data = null) {
        return this.http.post(this.API_URL + url, data).map((response: Response) => response.json());
    }
}