import React, { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { TaskHeader } from "./_taskHeader";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { ITask } from "./interfaces/ITask";
import { Status } from "../createTaskForm/enum/Status";
import { Priority } from "../createTaskForm/enum/Priority";
export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date,
    description = 'Lorem ipsum color sit amet',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e)=>console.log(e),
    onClick= (e)=>console.log(e),
  } = props;
  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"flex-start"}
      flexDirection={"column"}
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "error.light",
      }}
    >
      Test
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};
