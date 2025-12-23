import { ToDoItem } from "./toDoItem";
import { ToDoCollection } from "./todoCollection";

let todos = [
    new ToDoItem(1, "By Flowers"),
    new ToDoItem(2, "Get Shoes"),
    new ToDoItem(3, "Collect tikets"),
    new ToDoItem(4, "Call Joe", true),
];

let collection = new ToDoCollection("Adam", todos);

console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
let nextId = collection.addTodo("Remember my tasks");
let nextItem = collection.getTodoById(nextId);

todoItem?.printDetails();
nextItem?.printDetails();
// collection.addTodo(todoItem);