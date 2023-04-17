import React, { useState } from 'react';
import styles from './styles.module.css';

interface TaskFormProps {
  onSubmit: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
