import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = !this.showAddTask));
  }

  ngOnInit(): void {}
  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please Add Task and DayTime');
      return;
    }
    // Grap form
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    // Emit Form
    this.onAddTask.emit(newTask);
    // Clear Form
    this.text = '';
    this.day = '';
    this.reminder = false;
    // Hide Form
    this.showAddTask = false;
  }
}
