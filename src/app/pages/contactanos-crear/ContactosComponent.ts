import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../../services/contactos.service'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  Nombre: string | undefined;
  email: string | undefined;
  Mensaje: string | undefined;

  private contactosService = inject(ContactosService);

  constructor() { }

  guardar(formulario: any) {
    if (formulario.valid) {
      const contacto = {
        nombre: this.Nombre,
        email: this.email,
        mensaje: this.Mensaje
      };

      this.contactosService.postContactos(contacto).subscribe({
        next: (response) => {
          console.log('Contacto guardado', response);
          // Muestra el alert cuando los datos se hayan enviado correctamente
          alert('Enviado');
          window.location.href = "home"; // redirigir
        },
        error: (err) => {
          console.error('Error al enviar contacto', err);
          alert('Hubo un error al enviar el contacto');
        }
      });
    }
  }
}
