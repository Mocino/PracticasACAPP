import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XInputComponent } from './components/x-input/x-input.component';
import { XErrosComponent } from './components/x-erros/x-erros.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { XSeparadorComponent } from './components/x-separador/x-separador.component';

let componets: any[] = [
  XInputComponent,
  XErrosComponent,
  XSeparadorComponent,
]

@NgModule({
  declarations: [
    ...componets,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    ...componets,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class CoreModule { }
