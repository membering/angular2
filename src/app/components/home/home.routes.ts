import { Route } from '@angular/router';

import { HomeComponent } from './index';
import { AuthGuard } from '../../_guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardRoutes } from './card/card.routes';

export const HomeRoutes: Route[] = [
  	{
    	path: '',
    	component: HomeComponent,
    	children: [
			{ path: '', component: DashboardComponent},
			...CardRoutes
    	],
		canActivate: [AuthGuard]
  	}
];
