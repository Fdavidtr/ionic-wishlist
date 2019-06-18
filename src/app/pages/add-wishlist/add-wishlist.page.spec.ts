import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishlistPage } from './add-wishlist.page';

describe('AddWishlistPage', () => {
  let component: AddWishlistPage;
  let fixture: ComponentFixture<AddWishlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWishlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWishlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
