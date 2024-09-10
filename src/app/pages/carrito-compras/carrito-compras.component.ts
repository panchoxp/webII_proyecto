import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Asegúrate de instalar html2canvas
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  producto: any;
  currentDate: Date = new Date();

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.productosService.getProductosID(id).subscribe(p => {
          this.producto = p;
        });
      }
    });
  }

  imprimirFactura() {
    const element = document.querySelector('.factura') as HTMLElement;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      doc.addImage(imgData, 'PNG', 10, 10, 180, 0);
      doc.save('factura.pdf');
    });
  }
}
