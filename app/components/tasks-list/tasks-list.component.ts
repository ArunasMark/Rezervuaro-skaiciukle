import { Component, OnInit } from '@angular/core';
import {Taskk} from "../../models/Task";
import {TasksService} from "../../services/tasks.service";



@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.less']
})
export class TasksListComponent implements OnInit {
  public tasks:Taskk[]=[];


  constructor(private tasksService:TasksService) {
    this.tasks=tasksService.tasks;
  }

  ngOnInit(): void {
  }

  public delete(i:number){
    this.tasksService.delete(i);
  }

}
