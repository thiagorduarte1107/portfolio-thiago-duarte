import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Project } from '../../models/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectCardComponent {
  @Input() project!: Project;

  constructor(private dialog: MatDialog) {}

  openProjectDetails(): void {
    this.dialog.open(ProjectModalComponent, {
      panelClass: 'project-modal-dialog',
      data: this.project
    });
  }
}