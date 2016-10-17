import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutes } from './components/dashboard/index';
import { LoginComponent } from './components/login/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    ...DashboardRoutes,
    { path: 'login', component: LoginComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);