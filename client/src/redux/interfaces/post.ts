export interface PostFormData {
  description: string;
  file: any;
}

export interface Post {
  id: number;
  img_url: string;
  by: string;
  created_at: string;
  description: string;
  likes_count: number;
  comments_count: number;
  current_users_like_id: number;
}

export interface PostsState {
  byId: { [id: string]: Post };
  allIds: number[];
}
