import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatButtonsComponent } from './format-buttons.component';

describe('FormatButtonsComponent', () => {
  let component: FormatButtonsComponent;
  let fixture: ComponentFixture<FormatButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
