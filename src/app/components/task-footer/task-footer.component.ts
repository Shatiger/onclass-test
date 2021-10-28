import { Component, Input } from '@angular/core';
import { Task } from 'src/app/services/tasks.interface';

@Component({
  selector: 'app-task-footer',
  templateUrl: './task-footer.component.html',
  styleUrls: ['./task-footer.component.scss']
})
export class TaskFooterComponent {
  @Input()
  task!: Task;

}
