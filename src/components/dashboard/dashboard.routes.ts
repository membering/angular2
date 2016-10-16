import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BSComponentRoutes } from './bs-component/index';

import { DashboardComponent } from './index';
import { AuthGuard } from '../../_guards/auth.guard';

export const DashboardRoutes: Route[] = [
  	{
    	path: '',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...BSComponentRoutes
    	],
		canActivate: [AuthGuard]
  	}
];
