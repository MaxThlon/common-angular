import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThlonMenuItemComponent } from './thlon-menu-item.component';

describe('ThlonMenuItemComponent', () => {
  let component: ThlonMenuItemComponent;
  let fixture: ComponentFixture<ThlonMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThlonMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThlonMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
