import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffschedPage } from './offsched.page';

describe('OffschedPage', () => {
  let component: OffschedPage;
  let fixture: ComponentFixture<OffschedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OffschedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
