
import { TodoList } from './todo.js';


const todoList = new TodoList();


todoList.addTask('Write code');
todoList.addTask('Sleep');
todoList.addTask('Repeat');


todoList.markTaskAsComplete(0);


console.log('Todo List:');
todoList.listAllTasks();
