import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoryController],
  providers: [AppService, CategoryService],
})
export class AppModule {}
