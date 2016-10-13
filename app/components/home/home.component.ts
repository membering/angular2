import { Component, OnInit } from '@angular/core';

import { User } from '../../models/index';
import { UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: '../templates/home/home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loadProfile();
    }

    private loadProfile() {
        this.userService.getProfile().subscribe(response => {this.currentUser = response.data});
    }
}