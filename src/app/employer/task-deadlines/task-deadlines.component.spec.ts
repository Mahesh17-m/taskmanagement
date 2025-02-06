import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeadlinesComponent } from './task-deadlines.component';

describe('TaskDeadlinesComponent', () => {
  let component: TaskDeadlinesComponent;
  let fixture: ComponentFixture<TaskDeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDeadlinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
