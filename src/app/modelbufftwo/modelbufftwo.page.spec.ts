import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelbufftwoPage } from './modelbufftwo.page';

describe('ModelbufftwoPage', () => {
  let component: ModelbufftwoPage;
  let fixture: ComponentFixture<ModelbufftwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelbufftwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelbufftwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
