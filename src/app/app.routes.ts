import { Routes } from '@angular/router';
import { Login } from './auth/login/login.component';
import { Registro } from './auth/registro/registro.component';
import { ListaProductos } from './shop/lista-productos/lista-productos.component';
import { DetalleProducto } from './shop/detalle-producto/detalle-producto.component';
import { Home } from './home/home.component';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'home', component: Home },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'productos', component: ListaProductos },
      { path: 'producto/:id', component: DetalleProducto }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

