import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';
import { ContactosComponent } from "../contactanos-crear/ContactosComponent";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  servicio = inject(ProductosService);

  productos: any[] = [];
  productoId1: any;
  productoId2: any;
  productoId3: any;

  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = p;

      // Filtrar productos con id 1, 2, y 3
      this.productoId1 = this.productos.find(p => p.id === 1);
      this.productoId2 = this.productos.find(p => p.id === 2);
      this.productoId3 = this.productos.find(p => p.id === 3);
    });
  }
}
