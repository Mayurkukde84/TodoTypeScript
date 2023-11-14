import { FC, ReactElement } from "react";
import { Box, Grid } from "@mui/material";

import { TaskCounter } from "../taskCounter/taskCounter";
import { Task } from "../components/task/task";
import { format } from "date-fns";
const TaskArea: FC = (): ReactElement => {
  return (
    <>
      <Grid item md={8} px={4}>
        <Box mb={8} px={4}>
          <h2>
            Status Of Your Tasks As On
            {format(new Date(), "PPPP")}
          </h2>
        </Box>
        <Grid container display="flex" justifyContent={"center"}>
          <Grid item display={"flex"} gap={8}>
            <TaskCounter />
            <TaskCounter />
            <TaskCounter />
          </Grid>
          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            xs={10}
            md={8}
          >
            <Task />
            <Task />
            <Task />
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"}>
          Tasks Will Come Over Here
        </Box>
      </Grid>
    </>
  );
};

export default TaskArea;
