import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })

export class book {

    @Prop()
    title: string;
}

export const bookSchema = SchemaFactory.createForClass(book)
export type bookDocument = book & Document