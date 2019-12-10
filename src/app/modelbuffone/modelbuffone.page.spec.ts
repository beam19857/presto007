import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelbuffonePage } from './modelbuffone.page';

describe('ModelbuffonePage', () => {
  let component: ModelbuffonePage;
  let fixture: ComponentFixture<ModelbuffonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelbuffonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelbuffonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
