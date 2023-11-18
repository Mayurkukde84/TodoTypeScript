import { TaskCounterStatusType } from "../interfaces/iTaskCounter"
import { Status } from "../../components/createTaskForm/enum/Status"
export const emitCorrectLabel = (status:TaskCounterStatusType):string =>{
    switch(status){
        case Status.todo:
            return `Todo's`;
        case Status.inProgress:
            return 'In Progress';
        case Status.completed:
            return 'Completed'
    }
}