import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/services/comments.interface';

interface FileObject {
  target: {
    files: Array<File>
  }
}
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input()
  comments: Comment[] = [];

  attachment: File | undefined;

  onSubmit(form: NgForm): void {
    console.log(form.form.value);
  }

  fileListener(event: FileObject | Event | null): void {
    if (!event) {
      return;
    }
    const fileEvent = event as FileObject;
    this.attachment = fileEvent.target?.files[0];
  }
}
