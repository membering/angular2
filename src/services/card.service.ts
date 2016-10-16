import { Injectable } from '@angular/core';
import { HttpClient } from '../_libraries/http.client';

@Injectable()
export class CardService {
    constructor(private http: HttpClient) { }

    getList() {
        return this.http.post('/supplier/card/list');
    }
}