import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinPropertyDisplayComponent } from './min-property-display.component';

describe('MinPropertyDisplayComponent', () => {
  let component: MinPropertyDisplayComponent;
  let fixture: ComponentFixture<MinPropertyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinPropertyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinPropertyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
