import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelgrillPage } from './modelgrill.page';

describe('ModelgrillPage', () => {
  let component: ModelgrillPage;
  let fixture: ComponentFixture<ModelgrillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelgrillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelgrillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
