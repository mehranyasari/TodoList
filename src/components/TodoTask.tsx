import ITask from "../Interface";
import styles from "./TodoTask.module.css";

interface Props {
  task: ITask;
  deleteHandler(deleteTask: string): void;
}

const TodoTask = ({ task, deleteHandler }: Props) => {
  return (
    <div className={styles.todoContainer}>
      <ul className={styles.list}>
        <li>{task.taskName}</li>
        <li>{task.deadline}</li>
      </ul>
      <button
        onClick={() => {
          deleteHandler(task.taskName);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
