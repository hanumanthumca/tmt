import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.LoginComponent)
      },
      {
        path: 'request',
        loadComponent: () => import('./request/request').then(m => m.RequestComponent)
      },
      {
        path: 'portal',
        loadComponent: () => import('./portal/portal').then(m => m.PortalComponent)
      },
      {
        path: 'status',
        loadComponent: () => import('./status/status').then(m => m.StatusComponent)
      },
      {
        path: 'my-tasks',
        loadComponent: () => import('./my-tasks/my-tasks').then(m => m.MyTasksComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
