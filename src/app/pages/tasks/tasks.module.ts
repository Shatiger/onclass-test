import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskHeaderModule } from 'src/app/components/task-header/task-header.module';
import { TaskDetailsModule } from 'src/app/components/task-details/task-details.module';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    TaskHeaderModule,
    TaskDetailsModule
  ],
  declarations: [TasksComponent],
  providers: [TasksService]
})
export class TasksModule { }
