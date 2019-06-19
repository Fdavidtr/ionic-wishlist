import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishlistItemPage } from './add-wishlist-item.page';

describe('AddWishlistPage', () => {
  let component: AddWishlistItemPage;
  let fixture: ComponentFixture<AddWishlistItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWishlistItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWishlistItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

