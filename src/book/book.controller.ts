import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post('/create')
  create(@Body(new ValidationPipe()) createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get("all")
  findAll() {
    return this.bookService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
