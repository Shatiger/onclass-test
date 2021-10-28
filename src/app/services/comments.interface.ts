import { Author } from './tasks.interface';

export interface Comment {
    id: string;
    text: string;
    published_at: Date;
    author: Author;
}

export interface CommentsContainer {
    first: Comment[];
}
