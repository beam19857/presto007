import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelselectPage } from './modelselect.page';

describe('ModelselectPage', () => {
  let component: ModelselectPage;
  let fixture: ComponentFixture<ModelselectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelselectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
