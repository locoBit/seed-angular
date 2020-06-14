import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
    {
        path: 'first-component',
        component: FirstComponent,
        children: [
            {
                path: 'child-a',
                component: ChildAComponent
            },
        ]
    },
    {
        path: 'second-component',
        component: SecondComponent
    },
    {
        path: '',
        redirectTo: 'first-component',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: FirstComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
