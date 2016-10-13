import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/auth/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);