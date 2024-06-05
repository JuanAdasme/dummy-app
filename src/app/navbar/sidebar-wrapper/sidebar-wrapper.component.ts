import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { VerticalLayoutComponent } from '../vertical-layout/vertical-layout.component';
import { SidebarStateService } from '../sidebar-state.service';

@Component({
  selector: 'app-sidebar-wrapper',
  standalone: true,
  imports: [SidebarComponent, VerticalLayoutComponent],
  templateUrl: './sidebar-wrapper.component.html',
  styleUrl: './sidebar-wrapper.component.scss',
  // Se provee el servicio que maneja el estado de la barra vertical.
  providers: [SidebarStateService],
})

// Componente que contiene tanto la barra de navegación (sidebar.component) como la barra vertical (vertical-layout.component).
export class SidebarWrapperComponent {
  // Se declara el servicio que maneja el estado del sidebar como parámetro del constructor para inyectar la dependencia.
  constructor(public sidebarState: SidebarStateService) {}
}
