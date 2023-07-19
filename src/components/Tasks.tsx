import { useState } from "react";
import Button from "./Button";
import axios from "axios";

interface ITask {
  id: number;
  title: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleClick = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    setTasks(data);
  };

  return (
    <div>
      <h1>Tasks from API</h1>
      <Button disabled={false} onClick={handleClick}>
        Get Tasks from API
      </Button>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
};

export default Tasks;
