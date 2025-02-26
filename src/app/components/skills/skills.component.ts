import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Skill } from '../../models/interfaces';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('skillAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('progressAnimation', [
      transition(':enter', [
        style({ width: 0 }),
        animate('1000ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  private loadSkills(): void {
    this.skillsService.getSkills().subscribe(
      skills => this.skills = skills
    );
  }
}