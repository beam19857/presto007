import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsnackPage } from './modelsnack.page';

describe('ModelsnackPage', () => {
  let component: ModelsnackPage;
  let fixture: ComponentFixture<ModelsnackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsnackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsnackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
