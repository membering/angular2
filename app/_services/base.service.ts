import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BaseService {
    constructor(public http: Http, public API_URL) {
        this.http = http;
        this.API_URL = 'http://api.fastcard.vn';
    }
}