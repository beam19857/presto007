import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadbillPage } from './headbill.page';

describe('HeadbillPage', () => {
  let component: HeadbillPage;
  let fixture: ComponentFixture<HeadbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadbillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
