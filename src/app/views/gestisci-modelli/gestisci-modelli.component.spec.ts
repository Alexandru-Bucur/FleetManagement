import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestisciModelliComponent } from './gestisci-modelli.component';

describe('GestisciModelliComponent', () => {
  let component: GestisciModelliComponent;
  let fixture: ComponentFixture<GestisciModelliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestisciModelliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestisciModelliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
