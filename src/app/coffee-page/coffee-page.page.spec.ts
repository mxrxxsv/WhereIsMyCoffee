import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeePagePage } from './coffee-page.page';

describe('CoffeePagePage', () => {
  let component: CoffeePagePage;
  let fixture: ComponentFixture<CoffeePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
