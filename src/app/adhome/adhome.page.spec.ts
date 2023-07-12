import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdhomePage } from './adhome.page';

describe('AdhomePage', () => {
  let component: AdhomePage;
  let fixture: ComponentFixture<AdhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
