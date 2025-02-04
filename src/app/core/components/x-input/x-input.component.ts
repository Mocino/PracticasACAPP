import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'x-input',
  templateUrl: './x-input.component.html',
  styleUrl: './x-input.component.css'
})
export class XInputComponent implements ControlValueAccessor {

  @Input() id: string = '';
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() readonly?: boolean = false;
  @Input() maxlength?: number;
  @Input() minlength?: number;
  @Input() max?: number;
  @Input() min?: number;

  control: FormControl = new FormControl();

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    // Sincronizar los errores del ngControl con tu control interno
    if (this.ngControl && this.ngControl.control) {
      // Sincronizar validadores
      this.control.setValidators(this.ngControl.control.validator);

      // Sincronizar estados
      this.ngControl.statusChanges?.subscribe(() => {
        this.control.setErrors(this.ngControl.errors);
      });
    }
  }


  //#region ControlValueAccessor
  changeControl(): void {
    this.onChange(this.control.value);
  }

  onChange = (_: any) => {
    // This is intentional
  };

  onTouch = () => {
    // This is intentional
  };

  writeValue(value: string | number): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled){
      this.control.disable();
    }else{
      this.control.enable();
    }

  }
  //endregion
}
