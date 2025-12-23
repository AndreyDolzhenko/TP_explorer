import { ToDoItem } from "./toDoItem";

export class ToDoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, ToDoItem>();

    constructor (
        public userName: string,
        public todoItems: ToDoItem[] = [],
    ){
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        // this.todoItems.push(new ToDoItem(this.nextId, task));
        this.itemMap.set(this.nextId, new ToDoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number) : ToDoItem | undefined {
        return this.itemMap.get(id);
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}