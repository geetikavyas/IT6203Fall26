import { Component, signal } from '@angular/core';
import { MilestoneTracker } from './milestone-tracker/milestone-tracker';
import { ProgressNotesLab2 } from './progress-notes-lab2/progress-notes-lab2';
import { ProjectOverview } from './project-overview/project-overview';
import { TechnologyChecklist } from './technology-checklist/technology-checklist';
import { ProjectTaskManager } from './project-task-manager/project-task-manager';

@Component({
  imports: [MilestoneTracker, ProgressNotesLab2, ProjectOverview, TechnologyChecklist, ProjectTaskManager],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project-progress-tracker');
}