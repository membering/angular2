import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClient {
    constructor(private http: Http) { }

    public API_URL = 'http://api.fastcard.vn';

    private options() {
        let token = localStorage.getItem('token');
        if (token) {
            let headers = new Headers({ 'x-access-token': token });
            return new RequestOptions({ headers: headers });
        }
    }

    get(url) {
        return this.http.get(this.API_URL + url, this.options()).map((response: Response) => response.json());
    }

    post(url, data = null) {
        return this.http.post(this.API_URL + url, data, this.options()).map((response: Response) => response.json());
    }
}