import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavElement } from '../shared/nav-element.model';
import { VerticalLayoutComponent } from '../vertical-layout/vertical-layout.component';

@Component({
  selector: 'app-sidebar-wrapper',
  standalone: true,
  imports: [SidebarComponent, VerticalLayoutComponent],
  templateUrl: './sidebar-wrapper.component.html',
  styleUrl: './sidebar-wrapper.component.scss',
})

// Componente que contiene tanto la barra de navegación (sidebar.component) como la barra vertical (vertical-layout.component).
export class SidebarWrapperComponent {
  // Este atributo define si la barra vertical está oculta o visible.
  isHidden = true;

  // Este atributo almacena los subelementos del elemento clickeado en la barra de navegación.
  subElements: NavElement[] = [];

  // Determina si se muestra o se oculta la barra vertical.
  displayVerticalLayout(subElements: NavElement[]) {
    this.isHidden = this.subElements === subElements && !this.isHidden;
    this.subElements = subElements;
  }
}
