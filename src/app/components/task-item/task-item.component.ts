import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}
  faTimes = faTimes;
  ngOnInit(): void {}
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    this.onToggleTask.emit(task);
  }
}
