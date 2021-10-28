import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/services/comments.interface';
import { CommentsService } from 'src/app/services/comments.service';
import { Task } from 'src/app/services/tasks.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  task$: Observable<Task>;
  comments$: Observable<Comment[]>;

  constructor(
    private tasksService: TasksService,
    private commentsService: CommentsService
  ) {
    this.task$ = this.tasksService.getTask$();
    this.comments$ = this.commentsService.getComments$();
  }
}
