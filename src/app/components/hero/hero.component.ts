import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  title = 'Thiago Duarte';
  subtitle = 'Desenvolvedor Java FullStack & Arquiteto de Microsserviços';
  techStack = ['Java', 'Spring Boot', 'AWS', 'Angular'];
}