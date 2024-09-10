import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-contactos-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactos-lista.component.html',
  styleUrls: ['./contactos-lista.component.css']
})
export class ContactosListaComponent {
  servicio = inject(ContactosService);
  contactos: any;

  ngOnInit() {
    this.servicio.getContactos().subscribe(c => {
      this.contactos = c;
    });
  }

  eliminar(id: any) {
    this.servicio.deleteContactos(id).subscribe(() => {
      // Remover el contacto de la lista después de eliminarlo
      this.contactos = this.contactos.filter((contacto: any) => contacto.id !== id);
    });
  }
}

