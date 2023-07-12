import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaptismalPage } from './baptismal.page';

describe('BaptismalPage', () => {
  let component: BaptismalPage;
  let fixture: ComponentFixture<BaptismalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaptismalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
