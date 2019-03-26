import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThlonGroupComponent } from './thlon-group.component';

describe('ThlonGroupComponent', () => {
  let component: ThlonGroupComponent;
  let fixture: ComponentFixture<ThlonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThlonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThlonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
