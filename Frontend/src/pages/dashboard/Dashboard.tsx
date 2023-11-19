import { ReactElement, FC } from "react";
import { Grid } from "@mui/material";
import TaskArea from "../../taskArea/TaskArea";
import Sidebar from "../../components/sidebar/Sidebar";
const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container height={'100%'} p={0} m={0}>
     <TaskArea/>
     <Sidebar/>
    </Grid>
  );
};

export default Dashboard;
