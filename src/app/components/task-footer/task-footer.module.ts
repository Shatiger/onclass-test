import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFooterComponent } from './task-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskFooterComponent],
  exports: [TaskFooterComponent]
})
export class TaskFooterModule { }
