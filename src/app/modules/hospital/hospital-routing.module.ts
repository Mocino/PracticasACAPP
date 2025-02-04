import { NgModule } from '@angular/core';
import { PacienteComponent } from './components/paciente/paciente.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresComponent } from './components/doctores/doctores.component';

const routes: Routes = [
  {
    path:      'pacientes',
    component: PacienteComponent
  },
  {
    path:      'doctores',
    component: DoctoresComponent
  },
]


@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
