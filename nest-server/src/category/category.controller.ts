import { CategoryService } from './category.service';
import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategory(): any {
    return this.categoryService.getCategory();
  }
}
