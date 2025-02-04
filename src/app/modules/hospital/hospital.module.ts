import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HospitalRoutingModule } from './hospital-routing.module';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { CoreModule } from '../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PacienteComponent,
    DoctoresComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class HospitalModule { }
