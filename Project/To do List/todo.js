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
    };
    ToDoList.prototype.getItem = function () {
        return this.items;
    };
    return ToDoList;
}());
