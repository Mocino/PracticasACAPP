import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XSeparadorComponent } from './x-separador.component';

describe('XSeparadorComponent', () => {
  let component: XSeparadorComponent;
  let fixture: ComponentFixture<XSeparadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XSeparadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XSeparadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
