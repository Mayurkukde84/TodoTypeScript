import {
  Typography,
  Box,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { FC, ReactElement, useState } from "react";

import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from "./enum/Status";
import { Priority } from "./enum/Priority";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../../taskArea/interfaces/ICreateTask";

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);

  const [description, setDescription] = useState<string | undefined>(undefined);

  const [date, setDate] = useState<Date | null>(new Date());

  const [status, setStatus] = useState<string>(Status.todo);

  const [priority, setPriority] = useState<string>(Priority.normal);

  //Create task mutation

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest("http://localhost:3200/tasks", "POST", data)
  );

  function createTaskHandler() {
    if (!title || !date || !description) {
      return alert(`${title}, ${date}, ${description} is empty`);
    }

    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };

    createTaskMutation.mutate(task, {
      onSuccess: () => {
        alert("Task created successfully");
        // Additional logic if needed
      },
      onError: (error) => {
        alert(`Error creating task: ${error.message}`);
        // Additional error handling if needed
      },
    });
  }
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Alert>
        <AlertTitle>Success</AlertTitle>
        The task has been created successfully
      </Alert>

      <Typography mb={1} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={1}>
        <TaskTitleField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TaskDescriptionField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TaskDateField value={date} onChange={(e) => setDate(e.target.value)} />
        <Stack sx={{ width: "100%" }} direction={"row"} spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
