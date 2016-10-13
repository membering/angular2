import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
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