import { Component, Input } from '@angular/core';
import { Task } from 'src/app/services/tasks.interface';
import { Tab } from '../task-tabs/tab';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input()
  task!: Task;

  currentTab = Tab.Details;

  detailsTab = Tab.Details;
  containsTab = Tab.Contains;
  exercisesTab = Tab.Exercises;
}
