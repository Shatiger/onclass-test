import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './tasks.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private readonly http: HttpClient) { }

  getTask$(): Observable<Task> {
    return this.http.get<Task>('https://b.onclass.tech/web/content/slug/Vx2YUK5pg2d0?full=1').pipe(
      map(task => ({
        ...task,
        created_at: new Date(task.created_at),
        published_at: new Date(task.published_at)
      }))
    );
  }

}
