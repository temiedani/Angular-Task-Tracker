import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { TasksComponent } from '../components/tasks/tasks.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiurl = 'http://localhost:5005/tasks';
  constructor(private apiserver: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.apiserver.get<Task[]>(this.apiurl);
  }
  deleteTasks(task: Task): Observable<Task> {
    const targeturl = `${this.apiurl}/${task.id}`;
    return this.apiserver.delete<Task>(targeturl);
  }
  updateTask(task: Task): Observable<Task> {
    const targeturl = `${this.apiurl}/${task.id}`;
    return this.apiserver.put<Task>(targeturl, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.apiserver.post<Task>(this.apiurl, task, httpOptions);
  }
}
