import { Component } from '@angular/core';
import {TasksService} from "./services/tasks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'skaiciuokle';

  constructor(private tasksService:TasksService) {
    tasksService.load();
  }
}

