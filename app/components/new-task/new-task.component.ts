import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Taskk} from "../../models/Task";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.less']
})
export class NewTaskComponent implements OnInit {
  public taskName:string|null=null;
  public taskType:string|null=null;

  constructor(private tasksService:TasksService) {

  }

  ngOnInit(): void {
  }
  public addTask(){
    if (this.taskName!=null && this.taskType!=null){
      this.tasksService.addTask(this.taskName,this.taskType);
      this.taskName=null;
      this.taskType=null;
    }
  }
}
