import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/services/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input()
  comments: Comment[] = [];

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
