import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-milestone-tracker',
  styleUrl: './milestone-tracker.css',
  templateUrl: './milestone-tracker.html',
})
export class MilestoneTracker {
  milestoneStatus = new FormControl('');
}
