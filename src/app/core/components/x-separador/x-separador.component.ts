import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separador',
  template: `
    <h6 class="activity-title">{{ title | uppercase }}</h6>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      .activity-title {
        display: inline-block;
        background: linear-gradient(90deg, #b0b0b0, #ffffff); /* Degradado de gris a blanco */
        color: black; /* Texto negro para contraste */
        padding: 10px 40px 10px 20px; /* Espaciado: arriba | derecha | abajo | izquierda */
        border-radius: 50px; /* Forma ovalada */
        font-size: 18px; /* Tamaño más grande */
        font-family: 'Roboto', sans-serif; /* Fuente Roboto */
        letter-spacing: 3px; /* Espacio entre letras */
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); /* Sombra */
        text-align: left;
        min-width: 300px; /* Asegurar que tenga ancho suficiente */
      }
    `
  ]
})
export class XSeparadorComponent {
  /**Titulo mostrado en el separador */
  @Input() title: string = '';
}
