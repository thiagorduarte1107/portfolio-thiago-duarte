import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Microservices Architecture',
      description: 'Sistema distribuído usando Spring Cloud',
      technologies: ['Java', 'Spring Boot', 'Docker', 'AWS'],
      imageUrl: 'assets/images/project1.jpg',
      githubUrl: 'https://github.com/thiagoduarte'
    },
    // Add more projects here
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}