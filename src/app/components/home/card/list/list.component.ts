import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    cards: Object[] = [];

    constructor(private cardService: CardService) {}

    ngOnInit() {
        this.loadList();
    }

    private loadList() {
        return this.cardService.getList().subscribe(response => this.cards = response.data );
    }
}