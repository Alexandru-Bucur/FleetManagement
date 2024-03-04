import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlMioModelloComponent } from './il-mio-modello.component';

describe('IlMioModelloComponent', () => {
  let component: IlMioModelloComponent;
  let fixture: ComponentFixture<IlMioModelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlMioModelloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IlMioModelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
