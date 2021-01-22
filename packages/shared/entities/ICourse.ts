export interface ICourse {
  id: string;
  img_url: string;
  title: string;
  description: string;
  instructor_ids: string[];
  category_ids: string[];
  level_id: string;
  score: number;
  price: number;
  student_ids: string[];
  is_discount: boolean;
  createdAt?: string;
  updatedAt?: string;
}
