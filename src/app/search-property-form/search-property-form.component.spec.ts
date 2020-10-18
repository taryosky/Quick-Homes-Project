import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPropertyFormComponent } from './search-property-form.component';

describe('SearchPropertyFormComponent', () => {
  let component: SearchPropertyFormComponent;
  let fixture: ComponentFixture<SearchPropertyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPropertyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
