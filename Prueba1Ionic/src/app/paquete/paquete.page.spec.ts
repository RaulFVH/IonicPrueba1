import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaquetePage } from './paquete.page';

describe('PaquetePage', () => {
  let component: PaquetePage;
  let fixture: ComponentFixture<PaquetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
