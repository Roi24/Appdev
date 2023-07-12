import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservedwedPage } from './reservedwed.page';

describe('ReservedwedPage', () => {
  let component: ReservedwedPage;
  let fixture: ComponentFixture<ReservedwedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservedwedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
