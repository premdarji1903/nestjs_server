
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://prem:premdarji1903@cluster0.kpqhq6d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"), BookModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [MongooseModule]
})
export class AppModule { }