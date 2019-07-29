import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPagePage } from './model-page.page';

describe('ModelPagePage', () => {
  let component: ModelPagePage;
  let fixture: ComponentFixture<ModelPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
