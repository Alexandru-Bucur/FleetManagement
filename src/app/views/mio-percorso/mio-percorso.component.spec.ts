import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioPercorsoComponent } from './mio-percorso.component';

describe('MioPercorsoComponent', () => {
  let component: MioPercorsoComponent;
  let fixture: ComponentFixture<MioPercorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MioPercorsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MioPercorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
