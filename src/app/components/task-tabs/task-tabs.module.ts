import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTabsComponent } from './task-tabs.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [TaskTabsComponent],
  exports: [TaskTabsComponent]
})
export class TaskTabsModule { }
