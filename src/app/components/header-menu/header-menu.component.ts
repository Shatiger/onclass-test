import { Component } from '@angular/core';
import { HeaderMenuItem } from './header-menu.interface';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  items: HeaderMenuItem[] = [
    {
      name: 'i18n.PAGES.TASKS',
      icon: 'tasks',
      path: '/tasks'
    },
    {
      name: 'i18n.PAGES.TEACHERS',
      icon: 'teachers',
      path: '/teachers'
    },
    {
      name: 'i18n.PAGES.CLASSES',
      icon: 'classes',
      path: '/classes'
    },
    {
      name: 'i18n.PAGES.GAME',
      icon: 'game',
      path: '/game'
    }
  ];
}
