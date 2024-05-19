import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { book, bookSchema } from './schema/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: book.name, schema: bookSchema }])],
  controllers: [BookController],
  providers: [BookService],
  exports: [MongooseModule]
})
export class BookModule { }
