import { Route } from '@angular/router';

import { ListComponent } from './list/list.component';
import { GenerateComponent } from './generate/generate.component';

import { CardComponent } from './index';

export const CardRoutes: Route[] = [
    {
        path: 'card',
        component: CardComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent, data: { name: 'List' } },
            { path: 'generate', component: GenerateComponent, data: { name: 'Generate' } }
        ]
    }
];