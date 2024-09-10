import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-productos-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos-crear.component.html',
  styleUrls: ['./productos-crear.component.css']
})
export class ProductosCrearComponent {
  producto: string | undefined;
  categoria: string | undefined;
  precio: number | undefined;
  imagen: string | undefined;
  descripcion: string | undefined;

  private productosService = inject(ProductosService);

  constructor() { }

  guardarProducto(formulario: any) {
    if (formulario.valid) {
      const nuevoProducto = {
        producto: this.producto,
        categoria: this.categoria,
        precio: this.precio,
        imagen: this.imagen,
        descripcion: this.descripcion
      };

      this.productosService.postProductos(nuevoProducto).subscribe({
        next: (response) => {
          console.log('Producto guardado', response);
          alert('Producto guardado exitosamente');
          window.location.href = "admin"; // redirigir después de guardar
        },
        error: (err) => {
          console.error('Error al guardar producto', err);
          alert('Hubo un error al guardar el producto');
        }
      });
    }
  }
}
