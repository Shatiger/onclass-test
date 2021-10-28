import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskHeaderModule } from 'src/app/components/task-header/task-header.module';
import { TaskDetailsModule } from 'src/app/components/task-details/task-details.module';
import { TaskFooterModule } from 'src/app/components/task-footer/task-footer.module';
import { CommentsModule } from 'src/app/components/comments/comments.module';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    TaskHeaderModule,
    TaskDetailsModule,
    TaskFooterModule,
    CommentsModule
  ],
  declarations: [TasksComponent],
  providers: [TasksService]
})
export class TasksModule { }
