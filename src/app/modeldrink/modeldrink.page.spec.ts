import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrinkPage } from './modeldrink.page';

describe('ModeldrinkPage', () => {
  let component: ModeldrinkPage;
  let fixture: ComponentFixture<ModeldrinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldrinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldrinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
