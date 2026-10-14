
import { Component } from '@angular/core';

// Required for two-way data binding using [(ngModel)]
import { FormsModule } from '@angular/forms';

// Used to display reusable template content
import { NgTemplateOutlet } from '@angular/common';

// Used to change the appearance of HTML elements
import { NgClass, NgStyle } from '@angular/common';

// Our custom directive for displaying task status images
import { TaskStatusImage } from '../task-status-image';


@Component({
  imports: [FormsModule, NgTemplateOutlet, NgClass, NgStyle, TaskStatusImage],
  selector: 'app-project-task-manager',
  styleUrl: './project-task-manager.css',
  templateUrl: './project-task-manager.html',
})
export class ProjectTaskManager {

  // Task details used in conditional rendering (@if and @else)
  taskName = 'Design User Interface';
  taskCompleted = false;

  // Shared by the dropdown, @switch, styling, and status image
  taskStatus = 'In Progress';


  // Array of project tasks displayed using @for
  tasks = [
    'Design User Interface',
    'Create Database',
    'Develop API',
    'Test Application'
  ];


  // Two-way binding stores the task entered by the user
  newTask = '';

  // Adds a valid task to the array and clears the input field
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }


  // JSON data is initially stored as a string
  teamMembersJSON = `[
    { "firstName": "John", "lastName": "Dow" },
    { "firstName": "Ann", "lastName": "Smith" },
    { "firstName": "Joan", "lastName": "Doe" }
  ]`;

  // Converts JSON text into a JavaScript array of objects
  teamMembers = JSON.parse(this.teamMembersJSON);


  // Controls whether the ng-template review message is displayed
  showReviewMessage = false;

}
