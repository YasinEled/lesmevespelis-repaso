import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformesComponent } from './plataformes.component';

describe('PlataformesComponent', () => {
  let component: PlataformesComponent;
  let fixture: ComponentFixture<PlataformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlataformesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlataformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
