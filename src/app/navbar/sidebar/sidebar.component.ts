import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { NavElement } from '../shared/nav-element.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  // Datos de prueba para la barra de navegación. Cada elemento tiene id y title, y además puede tener href y una lista de subelementos.
  navGroups: NavElement[] = [
    {
      id: 1,
      title: 'Title 1',
      items: [
        { id: 11, title: 'Title 11', href: 'https://www.github.com/' },
        { id: 12, title: 'Title 12', href: 'https://www.github.com/' },
        { id: 13, title: 'Title 13', href: 'https://www.github.com/' },
      ],
    },
    {
      id: 2,
      title: 'Title 2',
      items: [
        { id: 21, title: 'Title 21', href: 'https://www.github.com/' },
        { id: 22, title: 'Title 22', href: 'https://www.github.com/' },
      ],
    },
    {
      id: 3,
      title: 'Title 3',
      items: [{ id: 31, title: 'Title 31', href: 'https://www.github.com/' }],
    },
    {
      id: 4,
      title: 'Title 4',
      href: 'https://www.youtube.com/',
    },
  ];
}
