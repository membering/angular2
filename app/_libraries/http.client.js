"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
        this.API_URL = 'http://api.fastcard.vn';
    }
    HttpClient.prototype.header = function () {
        var token = localStorage.getItem('token');
        if (token) {
            var headers = new http_1.Headers({ 'x-access-token': token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    HttpClient.prototype.get = function (url) {
        return this.http.get(this.API_URL + url, this.header()).map(function (response) { return response.json(); });
    };
    HttpClient.prototype.post = function (url, data) {
        if (data === void 0) { data = null; }
        return this.http.post(this.API_URL + url, data, this.header()).map(function (response) { return response.json(); });
    };
    HttpClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpClient);
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=http.client.js.map