import { todos } from '@/data/todos';

export default function handler(req, res) {
  const todoId = req.query.todoId;
  const todo = todos.find((item) => item.id === +todoId);

  switch (req.method) {
    case 'GET':
      res.status(200).json(todo);
      break;

    case 'PATCH':
      const newTodo = { ...todo, ...req.body };
      res.status(200).json(newTodo);
  }
}
