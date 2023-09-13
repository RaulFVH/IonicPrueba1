import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paquete2Page } from './paquete2.page';

describe('Paquete2Page', () => {
  let component: Paquete2Page;
  let fixture: ComponentFixture<Paquete2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paquete2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
