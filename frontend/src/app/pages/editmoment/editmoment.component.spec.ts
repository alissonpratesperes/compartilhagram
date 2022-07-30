import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmomentComponent } from './editmoment.component';

describe('EditmomentComponent', () => {
  let component: EditmomentComponent;
  let fixture: ComponentFixture<EditmomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
