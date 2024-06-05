import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavElement } from '../shared/nav-element.model';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})

// Este componente representa cada elemento de la barra de navegación.
export class SidebarItemComponent {
  // Esta variable recibe un elemento de la barra de navegación a la vez.
  @Input()
  option: NavElement;

  // Esta variable comunica al componente padre los subelementos que tiene el módulo clickeado en la propiedad 'items'.
  @Output()
  subElements = new EventEmitter<NavElement[]>();

  constructor() {
    this.option = { id: 0, title: '' };
  }

  // Esta función se llama al hacer click en un elemento de la barra de navegación que tiene subelementos en la propiedad 'items'.
  // Recibe por parámetro los subelementos del elemento seleccionado y los emite hacia el componente padre.
  emitItems(list: NavElement[]) {
    this.subElements.emit(list);
  }
}
