import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card.component';
import { ListComponent } from './list/list.component';
import { GenerateComponent } from './generate/generate.component';

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
    bootstrap: [ CardComponent ]
})

export class CardModule { }