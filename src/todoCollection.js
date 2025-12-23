"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoCollection = void 0;
const toDoItem_1 = require("./toDoItem");
class ToDoCollection {
    userName;
    todoItems;
    nextId = 1;
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new toDoItem_1.ToDoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.todoItems.find(item => item.id === id);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.ToDoCollection = ToDoCollection;
//# sourceMappingURL=todoCollection.js.map