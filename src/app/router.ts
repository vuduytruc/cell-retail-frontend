import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';

import { HomePageComponent } from './components/home-page/home-page.component';

export const ROUTES = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomePageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
