import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgPageComponent } from './ag-page.component';

describe('AgPageComponent', () => {
  let component: AgPageComponent;
  let fixture: ComponentFixture<AgPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
