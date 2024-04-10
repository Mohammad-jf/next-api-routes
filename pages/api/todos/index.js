import { todos } from '@/data/todos';

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(todos);
      break;

    case 'POST':
      const { todo } = req.body;
      const newTodo = {
        id: todos.length + 1,
        todo,
      };
      todos.push(newTodo);
      res.status(201).json(todos);
      break;

    case 'DELETE':
      res.status(200).json({ message: 'todos where deleted', data: [] });
      break;

    case 'PUT':
      const newTodos = [...req.body];
      res.status(200).json({ message: 'data replaced', data: newTodos });
      break;
  }
}
