import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarWrapperComponent } from './navbar/sidebar-wrapper/sidebar-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dummy-app';
}
