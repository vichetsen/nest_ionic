import { Category } from './../models/category.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  category: Category[] = [
    {
      id: 1,
      title: 'frontend',
      skill: 'angular, react, vue, javascript',
    },
    {
      id: 2,
      title: 'backend',
      skill: 'node js, express js, php',
    },
    {
      id: 3,
      title: 'database',
      skill: 'mysql, mongodb, firebase',
    },
  ];

  async getCategory(): Promise<Category[]> {
    return this.category;
  }
}
