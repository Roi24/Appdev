import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasschedPage } from './massched.page';

describe('MasschedPage', () => {
  let component: MasschedPage;
  let fixture: ComponentFixture<MasschedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MasschedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
