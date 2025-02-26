import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes, state } from '@angular/animations';
import { Project, Skill } from '../../models/interfaces';
import { ProjectService } from '../../services/project.service';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('terminalEffect', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out')
      ])
    ]),
    trigger('glitchText', [
      state('normal', style({ transform: 'none' })),
      state('glitch', style({ transform: 'skew(0deg)' })),
      transition('normal <=> glitch', [
        animate('0.1s', keyframes([
          style({ transform: 'skew(20deg)', offset: 0.2 }),
          style({ transform: 'skew(-20deg)', offset: 0.4 }),
          style({ transform: 'skew(0deg)', offset: 0.6 }),
          style({ transform: 'skew(10deg)', offset: 0.8 }),
          style({ transform: 'skew(0deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger('typewriter', [
      transition(':enter', [
        style({ width: 0, overflow: 'hidden' }),
        animate('1s steps(40, end)', style({ width: '100%' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  title = 'Thiago Duarte';
  subtitle = 'Software Developer';
  description = 'Desenvolvedor Full Stack especializado em Java/Spring Boot e Angular, criando aplicações modernas e escaláveis com práticas DevOps e soluções cloud-native.';
  glitchState = 'normal';
  
  featuredProjects: Project[] = [];
  skills: Skill[] = [];
  cliText = '';

  constructor(
    private projectService: ProjectService,
    private skillsService: SkillsService
  ) {}

  ngOnInit() {
    this.loadFeaturedProjects();
    this.loadSkills();
    this.simulateTyping('> Iniciando sistema...');
  }

  private loadFeaturedProjects() {
    this.projectService.getFeaturedProjects().subscribe(
      projects => this.featuredProjects = projects
    );
  }

  private loadSkills() {
    this.skillsService.getSkills().subscribe(
      skills => this.skills = skills
    );
  }

  private simulateTyping(text: string) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        this.cliText += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }
}