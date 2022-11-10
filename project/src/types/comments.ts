export type User = {
  id: number;
  name: string;
}

export type Comment = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

export type Comments = Comment[];
