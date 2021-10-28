import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/services/tasks.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  task$: Observable<Task>;

  constructor(public tasksService: TasksService) {
    this.task$ = tasksService.getTask$();
  }
}
