import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentformComponent } from './momentform.component';

describe('MomentformComponent', () => {
  let component: MomentformComponent;
  let fixture: ComponentFixture<MomentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
