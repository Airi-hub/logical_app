import React from 'react';
import TaskItem from '../TaskItem';
import styles from './styles.module.css';

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
    return (
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </ul>
    );
  };
  
  export default TaskList;
