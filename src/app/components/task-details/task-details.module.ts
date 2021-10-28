import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from './task-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { TaskTabsModule } from '../task-tabs/task-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TaskTabsModule
  ],
  declarations: [TaskDetailsComponent],
  exports: [TaskDetailsComponent]
})
export class TaskDetailsModule { }
