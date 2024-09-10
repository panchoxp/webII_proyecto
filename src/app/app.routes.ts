import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TerminosyCondicionesComponent } from './pages/terminosy-condiciones/terminosy-condiciones.component';
import { ContactosComponent } from './pages/contactanos-crear/ContactosComponent';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosListaComponent } from './pages/contactanos-lista/contactos-lista.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductosListaComponent } from './pages/productos-lista/productos-lista.component';
import { ProductosEditarComponent } from './pages/productos-editar/productos-editar.component';
import { LoginComponent } from './pages/login/login.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { authGuard } from './guards/usuarios.guard';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'terminos', component: TerminosyCondicionesComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'listaContactos', component: ContactosListaComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
  { path: 'listaProductos', component: ProductosListaComponent },
  { path: 'editarProductos/:idProducto', component: ProductosEditarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compras/:id', component: CarritoComprasComponent, canActivate: [authGuard] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

