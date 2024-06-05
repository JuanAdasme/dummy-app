import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SidebarStateService } from '../sidebar-state.service';

@Component({
  selector: 'app-vertical-layout',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vertical-layout.component.html',
  styleUrl: './vertical-layout.component.scss',
})
export class VerticalLayoutComponent {
  // Se inyecta el estado del sidebar para obtener los subelementos en el tempate.
  constructor(public sidebarState: SidebarStateService) {}
}
