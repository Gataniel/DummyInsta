export enum SortedBy {
  Likes = 'likes',
  CreatedAt = 'createdAt',
  Comments = 'comments',
}

export interface SortsState {
  sortedBy: SortedBy;
}
