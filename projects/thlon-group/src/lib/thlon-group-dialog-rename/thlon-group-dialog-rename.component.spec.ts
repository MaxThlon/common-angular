import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThlonGroupDialogRenameComponent } from './thlon-group-dialog-rename.component';

describe('ThlonGroupDialogRenameComponent', () => {
  let component: ThlonGroupDialogRenameComponent;
  let fixture: ComponentFixture<ThlonGroupDialogRenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThlonGroupDialogRenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThlonGroupDialogRenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
