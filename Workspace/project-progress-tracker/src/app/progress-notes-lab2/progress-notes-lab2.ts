import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-progress-notes-lab2',
  styleUrl: './progress-notes-lab2.css',
  templateUrl: './progress-notes-lab2.html',
})
export class ProgressNotesLab2 {
progressNote = 'hello';
}