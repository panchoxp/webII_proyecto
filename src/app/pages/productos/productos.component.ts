import { Component, inject, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router, RouterLink } from '@angular/router'; // Importa Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  servicio = inject(ProductosService);
  router = inject(Router); // Inyecta el Router
  productos: any[] = [];
  categoriaSeleccionada: string = '';
  rangoSeleccionado: string = '';

  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = p;
    });
  }

  get productosFiltrados() {
    return this.productos.filter(p => {
      const cumpleCategoria = this.categoriaSeleccionada ? p.categoria === this.categoriaSeleccionada : true;
      const cumpleRango = this.filtrarPorRango(p.precio);
      return cumpleCategoria && cumpleRango;
    });
  }

  filtrarPorRango(precio: number): boolean {
    if (!this.rangoSeleccionado) {
      return true;
    }

    const [min, max] = this.rangoSeleccionado.split('-').map(Number);
    return precio >= min && precio <= max;
  }

  goToCart(productId: number) {
    this.router.navigate(['/compras', productId]); // Redirige a la ruta del carrito de compras con el ID del producto
  }
}
