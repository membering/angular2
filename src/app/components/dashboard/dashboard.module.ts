import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from '../../_directives/index';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	HomeModule
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
