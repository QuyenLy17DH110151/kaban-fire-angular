import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel | null = null;
  @Output() edit = new EventEmitter<TaskModel>();
  constructor() {}

  ngOnInit(): void {}
}
