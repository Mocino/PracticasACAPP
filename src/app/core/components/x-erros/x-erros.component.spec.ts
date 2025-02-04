import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XErrosComponent } from './x-erros.component';

describe('XErrosComponent', () => {
  let component: XErrosComponent;
  let fixture: ComponentFixture<XErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XErrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
