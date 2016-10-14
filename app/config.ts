import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Config {
    private _env: Object;
    private _config: Object;

    constructor(private http: Http) { }

    load() {
        return new Promise((resolve, reject) => {
            this.http.get('app/config/env.json')
            .map(res => res.json())
                .subscribe((env_data) => {
                    this._env = env_data;
                    this.http.get('app/config/' + env_data.env + '.config.json')
                    .map(res => res.json())
                        .subscribe(
                            data => {
                                this._config = data;
                                resolve(true);
                            },
                            error => {
                                console.log(error);
                                resolve(false);
                            });
                });
        });
    }

    getEnv(key: any) {
        return this._env[key];
    }

    get(key: any) {
        return this._config[key];
    }
}