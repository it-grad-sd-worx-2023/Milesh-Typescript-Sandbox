var ToDoItem = /** @class */ (function () {
    function ToDoItem(id, text, complete) {
        this.id = id;
        this.text = text;
        this.complete = complete;
    }
    return ToDoItem;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.items = [];
    }
    ToDoList.prototype.addItem = function (text) {
        var newItem = new ToDoItem(this.items.length + 1, text, false);
        this.items.push(newItem);
        this.saveToLocalStorage();
        //  the code will run when we complete any task of anytime the list changes
        // it will write it in the storage.
    };
    ToDoList.prototype.getItems = function () {
        return this.items;
    };
    ToDoList.prototype.toggleItem = function (id) {
        var item = this.items.find(function (i) { return i.id === id; });
        if (item) {
            item.complete = !item.complete;
        }
    };
    ToDoList.prototype.saveToLocalStorage = function () {
        localStorage.setItem('todos', JSON.stringify(this.items));
    };
    return ToDoList;
}());
//  now we will access the local store to try to get it back so that we can assign it to the todo list 
// so that we can work with it. 
var todolist = new ToDoList();
var storedItems = localStorage.getItem('todos');
if (storedItems) {
    todolist.items = JSON.parse(storedItems);
}
//adding item to the TodoList
todolist.addItem('Eat 3 slices of Pizza');
console.log('todo items', todolist.getItems());
