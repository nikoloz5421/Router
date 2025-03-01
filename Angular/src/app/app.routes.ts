import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { ChildFourComponent } from './child-four/child-four.component';
import { ChildFiveComponent } from './child-five/child-five.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'main-page', component: MainComponent,
        children: [
            { path: 'child-one', component: ChildOneComponent },
            { path: 'child-two', component: ChildTwoComponent },
            { path: 'child-three', component: ChildThreeComponent },
            { path: 'child-four', component: ChildFourComponent },
            { path: 'child-five', component: ChildFiveComponent },
        ]
    },

    { path: 'about', component: AboutComponent },



    { path: '**', component: NotfoundComponent },
];
