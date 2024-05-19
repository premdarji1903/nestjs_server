import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { book, bookDocument } from './schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(book.name) private readonly bookModel: Model<bookDocument>) { }
  async create(createBookDto: CreateBookDto) {
    return await this.bookModel.create(createBookDto)
  }

  async findAll() {
    return await this.bookModel.find()
  }

  async findOne(id: string) {
    return await this.bookModel.findById(id)
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true })
  }

  async remove(id: string) {
    return await this.bookModel.findByIdAndDelete(id)
  }
}
