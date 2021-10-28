import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'app-task-tabs',
  templateUrl: './task-tabs.component.html',
  styleUrls: ['./task-tabs.component.scss']
})
export class TaskTabsComponent {
  @Output()
  onSwitch = new EventEmitter<Tab>();

  @Input()
  currentTab!: Tab;

  detailsTab = Tab.Details;
  containsTab = Tab.Contains;
  exercisesTab = Tab.Exercises;

  activateTab(tab: Tab): void {
    this.onSwitch.emit(tab);
  }
}
