export interface ICourses {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  instructor: string;
  categories: string[];
  level: string;
  score: number;
  price: number;
  students: number;
  updatedAt: string;
  isDiscount: boolean;
}
