import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Model } from 'mongoose';
import { Todo } from './entities/todo.entity';
import { InjectModel } from '@nestjs/mongoose';
import {TodoSchema} from "../models/todo.model"


@Injectable()
export class TodosService {
  constructor(@InjectModel("Todo") private readonly todoModel: Model<Todo>) {}
  async create(createTodoDto: CreateTodoDto) {
    if(createTodoDto.title===""){
      throw new BadRequestException("Title is required");
    }
    const newTodo = new this.todoModel(createTodoDto)

    return newTodo;
  }

 async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  async remove(id: string) {
    const remove = await this.todoModel.findByIdAndDelete(id)
    return remove;
  }
}
