import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Join } from './pages/join/join';

export const routes: Routes = [
  {
    path: '',
    component: Home
    },
    {
    path: 'join',
    component: Join
  }
];