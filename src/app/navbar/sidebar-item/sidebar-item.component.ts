import { Component, Input } from '@angular/core';
import { NavElement } from '../shared/nav-element.model';
import { SidebarStateService } from '../sidebar-state.service';

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
  @Input() option: NavElement;

  constructor(public sidebarState: SidebarStateService) {
    this.option = { id: 0, title: '' };
  }

  // Esta función se llama al hacer click en un elemento de la barra de navegación que tiene subelementos en la propiedad 'items'.
  // Recibe por parámetro los subelementos del elemento seleccionado y los actualiza en el estado, expandiendo o colapsando la barra vertical de ser necesario.
  updateItems(list: NavElement[]) {
    this.sidebarState.displayVerticalLayout(list);
  }
}
