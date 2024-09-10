import { Component, inject, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.css'
})
export class ProductosListaComponent {
  servicio = inject(ProductosService)
  productos: any[] = [];


  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{      
      this.productos = p
    })    
  }

  eliminar(id: any): void {
    this.servicio.deleteProductos(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id !== id);
    });
  }
}