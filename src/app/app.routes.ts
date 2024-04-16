import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './cliente/details/details.component';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },

  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home detalhes'
  },

  {
    path: 'cliente-novo',
    component: ClienteNovoComponent,
    title: 'Cliente novo'
  },
];
