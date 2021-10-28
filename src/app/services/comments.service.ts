import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment, CommentsContainer } from './comments.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getComments$(): Observable<Comment[]> {
    return this.http.get<CommentsContainer>('https://b.onclass.tech/web/comments/thread/79469d64-876e-4eb8-a436-c70948f1ce35/digest').pipe(
      map(container => container.first),
      map(comments => comments.map(comment => ({
        ...comment,
        published_at: new Date(comment.published_at)
      })))
    );
  }

}
