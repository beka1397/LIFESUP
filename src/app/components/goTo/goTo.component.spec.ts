import { ComponentFixture, TestBed } from '@angular/core/testing';

import { goToComponent } from './goTo.component';

describe('goToComponent', () => {
  let component: goToComponent;
  let fixture: ComponentFixture<goToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ goToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(goToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
