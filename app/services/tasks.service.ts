import {Injectable} from '@angular/core';
import {Taskk} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks: Taskk[] = [];

  constructor() {
    this.load();
  }

  public addTask(taskName: string, taskType: string) {
    this._tasks.push(new Taskk(taskName, taskType));
    this.save();
  }

  public get tasks() {
    return this._tasks;
  }

  public save() {
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  public load() {
    const data = localStorage.getItem('tasks');
    if (data != null) {
      this._tasks = JSON.parse(data);
    }
  }

  public delete(i: number) {
    this._tasks.splice(i, 1);
    this.save();
  }
}
