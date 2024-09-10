import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-productos-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productos-editar.component.html',
  styleUrl: './productos-editar.component.css'
})
export class ProductosEditarComponent {
  id: any;
  producto: any;
  categoria: string = "";
  precio: any;
  imagen: string = "";
  descripcion: string = "";

  ruta = inject(ActivatedRoute);
  servicio = inject(ProductosService);

  ngOnInit() {
    this.ruta.params.subscribe(r => {
      let id = r['idProducto'];
      this.servicio.getProductosID(id).subscribe(p => {
        this.id = p.id;
        this.producto = p.producto;
        this.categoria = p.categoria;
        this.precio = p.precio;
        this.imagen = p.imagen;
        this.descripcion = p.descripcion;
      });
    });
  }

  editar(data: NgForm) {
    this.servicio.putProductos(data.value).subscribe(() => {
      alert("Elemento editado");
      window.location.href = "admin"; // redirigir      
    });
  }
}