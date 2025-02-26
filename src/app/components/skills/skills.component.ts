import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 80 }
  ];
}