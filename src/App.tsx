import { ChangeEvent, FC, useState } from "react";
import ITask from "./Interface";
import TodoTask from "./components/TodoTask";
import styles from "./App.module.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(+event.target.value);
    }
  };

  const addHandler = () => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  const deleteHandler = (deleteTask: string) => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != deleteTask;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Todo App</h1>
        <div className="inputContainer">
          <input
            className={styles.inputs}
            type="text"
            placeholder="task..."
            name="task"
            value={task}
            onChange={changeHandler}
          />
          <input
            className={styles.inputs}
            type="number"
            name="deadline"
            value={deadline}
            onChange={changeHandler}
          />
          <button className={styles.button} onClick={addHandler}>
            add task
          </button>
        </div>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return (
            <TodoTask key={key} task={task} deleteHandler={deleteHandler} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
