import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { DocsComponent } from './components/views/docs/docs.component';
import { GameComponent } from './components/views/game/game.component';
import { TutorialComponent } from './components/views/tutorial/tutorial.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"docs",
        component: DocsComponent
    },
    {
        path: "game",
        component: GameComponent
    },
    {
        path: "tutorial",
        component: TutorialComponent
    }
];
