import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card.component';
import { ListComponent } from './list/list.component';
import { GenerateComponent } from './generate/generate.component';

import { CardService } from '../../../services/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CardComponent,
        ListComponent,
        GenerateComponent
    ],
    providers: [
        CardService
    ],
    bootstrap: [ CardComponent ]
})

export class CardModule { }