"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoItem = void 0;
class ToDoItem {
    id;
    task;
    complete;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.ToDoItem = ToDoItem;
// export class ToDoItem {
//     public id: number;
//     public task: string;
//     public complete: boolean = false;
//     public constructor (id: number, task: string, complete: boolean) {
//         this.id = id;
//         this.task = task;
//         this.complete = complete;
//     }
//     public printDetails() : void {
//         console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
//     }
// };
//# sourceMappingURL=toDoItem.js.map