import type { Product } from "./productEntity";

export interface ProductData {
  checkout_id: number;
  identifier: string;
  video_headline: string;
  video_sub_headline: string;
  video_url: string;
  products: Product[];
  created_at: string;
  updated_at: string;
}