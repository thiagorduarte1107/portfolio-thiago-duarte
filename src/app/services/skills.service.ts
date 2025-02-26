import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'Angular', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'Kubernetes', level: 70 },
    { name: 'Jenkins', level: 75 },
    { name: 'Maven', level: 80 },
    { name: 'Hibernate', level: 85 },
    { name: 'JavaFX', level: 75 },
    { name: 'SCSS', level: 80 },
    { name: 'Angular CLI', level: 85 }
  ];

  constructor() {}

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return of(this.skills.filter(skill => skill.level >= 80));
  }
}