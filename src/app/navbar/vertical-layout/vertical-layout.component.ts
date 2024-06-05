import { Component, Input } from '@angular/core';
import { NavElement } from '../shared/nav-element.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vertical-layout',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vertical-layout.component.html',
  styleUrl: './vertical-layout.component.scss',
})
export class VerticalLayoutComponent {
  // Este atributo recibe los subelementos del elemento clickeado en la barra de navegación. El flujo es el siguiente:
  // sidebar-item --(componente padre)--> sidebar --(componente padre)--> sidebar-wrapper --(componente hijo)--> vertical-layout
  @Input()
  subElements: NavElement[];

  constructor() {
    this.subElements = [];
  }
}
