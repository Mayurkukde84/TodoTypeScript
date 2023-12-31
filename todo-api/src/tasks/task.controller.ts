import { UpdateResult } from 'typeorm';
import { Task } from './task.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain,plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';



class TasksController {
  //this is method for the get routess
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    //Declare a varible to hold all tasks
    let allTasks: Task[];
    //fetch all tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({
        order: {
          date: 'ASC',
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];

      return res.json(allTasks).status(200);
    } catch (_errors) {
      return res
        .json({ error: 'Internal Server Error' })
        .status(500);
    }

    //convert the tasks instances to an array of objects
  }

  //Method for the post routes
  public async create(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //create new instance of the task

    const newTask = new Task();

    //add the required properties to the task object
    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;

    //add the new task to the database

    let createdTask: Task;
    try {
      createdTask = await AppDataSource.getRepository(
        Task,
      ).save(newTask);

      createdTask = instanceToPlain(createdTask) as Task;
      return res.json(createdTask).status(200);
    } catch (error) {
      return res
        .json({ error: 'Internal Server Error' })
        .status(500);
    }
  }

  //Method for updating tasks

  public async update(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //try to find if the tasks exists
    let task: Task | null;

    try {
      task = await AppDataSource.getRepository(
        Task,
      ).findOne({
        where: { id: req.body.id },
      });

    
    } catch (error) {
      return res
        .json({ error: 'Internal Server Error' })
        .status(500);
    }

      //Return 400 if task is null
      if(!task){
        return res.status(400).json({
            error:'The task with given ID does not exist'
        })
      }

      //Declare a varible for updatedTask
let updatedTask:UpdateResult;
      //Update the task
try {
    updatedTask = await AppDataSource.getRepository(Task).update(req.body.id,plainToInstance(Task,{
        status:req.body.status
    }));
    updatedTask = instanceToPlain(updatedTask) as UpdateResult;

    return res.json(updatedTask).status(200)
} catch (error) {
    return res.json({error:'Internal Server Error'})
}
      //Convert the updatedTask instance to an object
    
  }
}

export const taskController = new TasksController();
