import React from 'react';
import styles from './styles.module.css';

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <li
      className={`${styles.taskItem} ${task.done ? styles.done : ''}`}
      onClick={() => onToggle(task.id)}
    >
      {task.text}
    </li>
  );
};

export default TaskItem;
