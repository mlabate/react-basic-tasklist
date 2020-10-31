import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Task } from "./Task";
import { AddTask } from "./addTask";
import { GET_TASKS } from "./Query";

const TaskContainer = () => {
  const { loading, error, data, refetch } = useQuery(GET_TASKS);

  return (
    <>
      {" "}
      <AddTask refetch={refetch} />
      <Task error={error} loading={loading} data={data} />
    </>
  );
};

export { TaskContainer };