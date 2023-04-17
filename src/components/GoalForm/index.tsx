import React, { useState } from 'react';
import styles from './styles.module.css';

interface GoalFormProps {
  onSubmit: (goal: string) => void;
  initialValue?: string;
}

const GoalForm: React.FC<GoalFormProps> = ({ onSubmit, initialValue = '' }) => {
  const [goal, setGoal] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(goal);
    setGoal('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.goalForm}>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter a goal"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GoalForm;
