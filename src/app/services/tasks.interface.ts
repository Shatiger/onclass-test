export interface Author {
    id: string;
    first_name: string;
    last_name: string;
    userpic: {
        sm: { url: string },
        smX2: { url: string }
    };
}

export interface Task {
    id: string;
    title: string;
    sub_title: string;
    description: string;
    contains: string;
    exercises: string;
    created_at: Date;
    published_at: Date;
    level: string;
    author: Author;
    stats: {
        comments_count: number;
        rating: number;
        shares_count: number;
        likes_count: number;
        dislikes_count: number;
        views_count: number;
    };
}
