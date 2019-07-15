import { IProduct } from '../iproduct.interface';
import { Category } from '../category';

export class Product implements IProduct {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}
