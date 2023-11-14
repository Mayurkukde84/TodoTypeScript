import { FC, ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import { format } from "date-fns";
import { TaskCounter } from "../taskCounter/taskCounter";
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
        <Grid container display='flex' justifyContent={"center"} >
          <Grid item display={'flex'} gap={8}>
            <TaskCounter />
            <TaskCounter />
            <TaskCounter />
          </Grid>
          
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} my={8}>
            <Box>Tasks Will Come Over Here</Box>
          </Grid>
      </Grid>
    </>
  );
};

export default TaskArea;
