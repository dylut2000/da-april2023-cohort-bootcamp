// request
export interface ProductRequest {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

// products
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }