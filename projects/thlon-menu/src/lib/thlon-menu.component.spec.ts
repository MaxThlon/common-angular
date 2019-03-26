import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThlonMenuComponent } from './thlon-menu.component';

describe('ThlonMenuComponent', () => {
  let component: ThlonMenuComponent;
  let fixture: ComponentFixture<ThlonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThlonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThlonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
