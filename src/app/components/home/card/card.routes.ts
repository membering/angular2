import { Route } from '@angular/router';

import { ListComponent } from './list/list.component';
import { GenerateComponent } from './generate/generate.component';

import { CardComponent } from './index';

export const CardRoutes: Route[] = [
    {
        path: 'card',
        component: CardComponent,
        children: [
            { path: 'list', component: ListComponent},
            { path: 'generate', component: GenerateComponent}
        ]
    }
];