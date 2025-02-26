import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projetos' },
    { path: '/skills', label: 'Habilidades' }
  ];
}