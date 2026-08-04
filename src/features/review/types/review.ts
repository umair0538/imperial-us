export interface ProductReview {

  id: string;

  rating: number;

  title: string | null;

  comment: string;

  reviewer_name: string;

  verified_purchase: boolean;

  created_at: string;

}