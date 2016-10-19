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
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{ path: 'dashboard', component: DashboardComponent, data: { name: 'Dashboard' } },
			...CardRoutes
    	],
		canActivate: [AuthGuard]
  	}
];
