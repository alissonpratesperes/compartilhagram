import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmomentComponent } from './newmoment.component';

describe('NewmomentComponent', () => {
  let component: NewmomentComponent;
  let fixture: ComponentFixture<NewmomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
