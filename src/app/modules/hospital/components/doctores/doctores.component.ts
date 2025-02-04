import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrl: './doctores.component.css'
})
export class DoctoresComponent {
  // Crear el formulario reactivo
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario con controles y validaciones
    this.doctorForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]], // Nombre, obligatorio, mínimo 3 caracteres
      edad: ['', [Validators.required, Validators.min(18)]], // Edad, obligatorio, mínimo 18 años
      especialidad: ['', Validators.required] // Especialidad, obligatorio
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.doctorForm.valid) {
      console.log('Formulario enviado', this.doctorForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
