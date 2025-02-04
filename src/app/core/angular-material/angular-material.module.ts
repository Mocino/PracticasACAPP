import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
