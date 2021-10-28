import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHeaderComponent } from './task-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskHeaderComponent],
  exports: [TaskHeaderComponent]
})
export class TaskHeaderModule { }
