import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./modules/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'hospital',
        loadChildren: () =>
          import('./modules/hospital/hospital.module').then((m) => m.HospitalModule),
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
