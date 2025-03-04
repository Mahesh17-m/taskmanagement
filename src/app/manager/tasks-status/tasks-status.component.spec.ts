import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksStatusComponent } from './tasks-status.component';

describe('TasksStatusComponent', () => {
  let component: TasksStatusComponent;
  let fixture: ComponentFixture<TasksStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
