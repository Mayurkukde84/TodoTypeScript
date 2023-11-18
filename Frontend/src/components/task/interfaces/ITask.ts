import { Priority } from './../../createTaskForm/enum/Priority';
import { ITaskHeader } from "./ITaskHeader";
import { ITaskFooter } from "./ITaskFooter";
import { ITaskDescription } from "./ITaskDescription";

export interface ITask extends ITaskHeader,ITaskFooter,ITaskDescription{
    id?:string;
    priority?:string,
    status?:string
}