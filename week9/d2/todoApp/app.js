
import { TodoList } from './todo.js';

// Create an instance of the TodoList class
const todoList = new TodoList();

// Add tasks
todoList.addTask('Write code');
todoList.addTask('Sleep');
todoList.addTask('Repeat');

// Mark a task as complete
todoList.markTaskAsComplete(0);

// List all tasks
console.log('Todo List:');
todoList.listAllTasks();
