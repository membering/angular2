import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SidebarComponent } from '../../_directives/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from './card/card.module';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
        CardModule
    ],
    declarations: [
        HomeComponent,
        SidebarComponent,
        DashboardComponent
    ],
    bootstrap: [ HomeComponent ]
})

export class HomeModule { }
