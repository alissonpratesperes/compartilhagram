import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewmomentComponent } from './pages/newmoment/newmoment.component';
import { MomentComponent } from './pages/moment/moment.component';

  const routes: Routes = [
    {
      path: '',
        component: HomeComponent
    },
    {
      path: 'about',
        component: AboutComponent
    },
    {
      path: 'moments/new',
        component: NewmomentComponent
    },
    {
      path: 'moments/:id',
        component: MomentComponent
    }
  ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

      export class AppRoutingModule { }
