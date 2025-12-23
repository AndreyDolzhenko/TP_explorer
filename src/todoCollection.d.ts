import { ToDoItem } from "./toDoItem";
export declare class ToDoCollection {
    userName: string;
    todoItems: ToDoItem[];
    private nextId;
    constructor(userName: string, todoItems?: ToDoItem[]);
    addTodo(task: string): number;
    getTodoById(id: number): ToDoItem | undefined;
    markComplete(id: number, complete: boolean): void;
}
//# sourceMappingURL=todoCollection.d.ts.map