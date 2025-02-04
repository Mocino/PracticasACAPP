import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'x-erros',
  templateUrl: './x-erros.component.html',
  styleUrl: './x-erros.component.css'
})
export class XErrosComponent {
  @Input() ngControl!: NgControl;
}
