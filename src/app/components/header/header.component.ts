import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: String = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = !this.showAddTask));
  }
  ngOnInit(): void {}

  toggleAddButton() {
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
