import { Component, Input } from '@angular/core';
import { Author } from 'src/app/services/tasks.interface';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent {
  @Input()
  author!: Author;

  @Input()
  publishedAt!: Date;
}
