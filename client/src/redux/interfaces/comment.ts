export interface CommentFormData {
  text: string;
}

export interface Comment {
  id: number;
  text: string;
  by: string;
}

export interface CommentsState {
  byPostId: { [id: string]: Comment[] };
}
