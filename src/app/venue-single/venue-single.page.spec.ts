import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueSinglePage } from './venue-single.page';

describe('VenueSinglePage', () => {
  let component: VenueSinglePage;
  let fixture: ComponentFixture<VenueSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueSinglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
