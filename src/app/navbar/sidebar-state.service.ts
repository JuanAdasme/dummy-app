import { Injectable } from '@angular/core';
import { NavElement } from './shared/nav-element.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
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
