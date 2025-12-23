"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = require("./toDoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new toDoItem_1.ToDoItem(1, "By Flowers"),
    new toDoItem_1.ToDoItem(2, "Get Shoes"),
    new toDoItem_1.ToDoItem(3, "Collect tikets"),
    new toDoItem_1.ToDoItem(4, "Call Joe", true),
];
let collection = new todoCollection_1.ToDoCollection("Adam", todos);
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
let nextId = collection.addTodo("Remember my tasks");
let nextItem = collection.getTodoById(nextId);
todoItem?.printDetails();
nextItem?.printDetails();
// collection.addTodo(todoItem);
//# sourceMappingURL=index.js.map