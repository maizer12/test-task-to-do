export const sumCompleted = (tasks) => {
  return tasks.reduce((sum, task) => {
    return sum + (!task.completed ? 1 : 0);
  }, 0);
};
