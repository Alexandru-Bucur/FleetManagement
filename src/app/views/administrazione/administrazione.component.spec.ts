import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrazioneComponent } from './administrazione.component';

describe('AdministrazioneComponent', () => {
  let component: AdministrazioneComponent;
  let fixture: ComponentFixture<AdministrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
