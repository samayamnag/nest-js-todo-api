import { Controller, Response, HttpStatus, Get, Body, Param, Post, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { ApiUseTags, ApiResponse, ApiImplicitParam, ApiImplicitBody, ApiImplicitQuery } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/createTodo.dto';
import { ITodo } from './interfaces';

@ApiUseTags('todos')
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }

    @Get()
    public async getTodos(@Response() res) {
        const todos = await this.todosService.findAll();
        return res.status(HttpStatus.OK).json(todos);
    }

    @Get('find')
    public async findTodo(@Response() res, @Body() body) {
        const queryCondition = body;
        const todos = await this.todosService.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(todos);
    }

    @Get('/:id')
    @ApiImplicitParam({ name: 'id' })
    public async getTodo(@Response() res, @Param() param) {
        const todo = await this.todosService.findById(param.id);
        return res.status(HttpStatus.OK).json(todo);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created' })
    public async createTodo(@Response() res, @Body() createTodoDTO: CreateTodoDto) {
        const todo = await this.todosService.create(createTodoDTO);
        return res.status(HttpStatus.CREATED).json(todo);
    }

    @Patch('/:id')
    @ApiImplicitParam({ name: 'id' })
    public async updateTodo(@Response() res, @Param() param, @Body() itodo: ITodo) {
        const todo = await this.todosService.update(param.id, itodo);
        return res.status(HttpStatus.OK).json(todo);
    }

    @Delete('/:id')
    @ApiImplicitParam({ name: 'id' })
    public async deleteTodo(@Response() res, @Param() param) {
        const todo = await this.todosService.delete(param.id);
        return res.status(HttpStatus.OK).json(todo);
    }
}
