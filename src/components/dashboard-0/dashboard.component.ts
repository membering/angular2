import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Config } from '../../config';

import { User } from '../../models/index';
import { UserService, CardService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    jwtHelper: JwtHelper = new JwtHelper();
    currentUser: User = new User();
    cardList = [];

    constructor(
        private userService: UserService,
        private cardService: CardService,
        private config: Config
    ) {
        var token = localStorage.getItem('id_token');
        this.currentUser = this.jwtHelper.decodeToken(token);
    }

    ngOnInit() {
        this.loadCardList();
    }

    private loadCardList() {
        this.cardService.getList().subscribe(response => { this.cardList = response.data; });
    }
}