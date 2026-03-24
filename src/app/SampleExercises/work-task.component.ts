import { Component } from '@angular/core';

@Component({
  selector: 'app-work-task',
  templateUrl: './work-task.component.html',
  styleUrls: ['./work-task.component.css']
})
export class WorkTaskComponent {
  task: string = '';
  flag: boolean = false;
  taskArr: string[] = [];
  completedTasks: boolean=false;
  count:number=0;

  constructor() {}

  AddTask() {
    this.flag = true;
    this.taskArr.push(this.task);
    this.completedTasks; // Initialize as not completed
    this.task = '';
  }

  toggleComplete(i:any) {
    this.completedTasks=!this.completedTasks;
    this.count =this.count +1;
    this.taskArr.filter(taskArr => taskArr == i);
  
    
  }
  isCompleted(): boolean {
    
   
    return this.completedTasks;
  }
}
