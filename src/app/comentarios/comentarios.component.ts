import { Component } from '@angular/core';
import { ComentariosHijoComponent } from '../comentarios-hijo/comentarios-hijo.component';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ComentariosHijoComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  lista:string[]=[];
  recibirDato(dato:string) {
    this.lista.push(dato);
    alert(`El dato recibido es ${dato}`)
    }
}
