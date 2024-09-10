import { Component } from '@angular/core';
import { ContactosListaComponent } from "../contactanos-lista/contactos-lista.component";
import { ProductosCrearComponent } from "../productos-crear/productos-crear.component";
import { ProductosListaComponent } from "../productos-lista/productos-lista.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ContactosListaComponent, ProductosCrearComponent, ProductosListaComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {}
