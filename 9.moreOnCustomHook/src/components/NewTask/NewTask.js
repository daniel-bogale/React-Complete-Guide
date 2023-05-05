import { useRef } from "react";
import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id

    console.log(inputRef.current.value);
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
    inputRef.current.clearInput();
  };
  const inputRef = useRef(null);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-first-38e92-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm
        ref={inputRef}
        onEnterTask={enterTaskHandler}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};
export default NewTask;
