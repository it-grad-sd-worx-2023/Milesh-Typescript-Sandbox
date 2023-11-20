class ToDoItem {
    constructor(id, text, complete) {
        this.id = id;
        this.text = text;
        this.complete = complete;
    }
}
class ToDoList {
    constructor() {
        this.items = [];
    }
    addItem(text) {
        const newItem = new ToDoItem(this.items.length + 1, text, false);
        this.items.push(newItem);
        this.saveToLocalStorage();
        //  the code will run when we complete any task of anytime the list changes
        // it will write it in the storage.
    }
    getItem() {
        return this.items;
    }
    toggleItem(id) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.complete = !item.complete;
        }
    }
    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.items));
    }
}
//  now we will access the local store to try to get it back so that we can assign it to the todo list 
// so that we can work with it. 
const todolist = new ToDoList();
const storedItems = localStorage.getItem('todos');
if (storedItems) {
    todolist.items = JSON.parse(storedItems);
}
//adding item to the TodoList
todolist.addItem('Eat 3 slices of Pizza');
console.log(todolist);
