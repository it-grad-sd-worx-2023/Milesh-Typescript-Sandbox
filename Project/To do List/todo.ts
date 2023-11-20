class ToDoItem{
    constructor( public id: number , public text: string, public complete: boolean) {

        
    }
}

class ToDoList { 
     items : ToDoItem[] = [];

     addItem(text: string) : void {
        const newItem = new ToDoItem(this.items.length + 1, text, false);
        this.items.push(newItem);
        this.saveToLocalStorage();
        //  the code will run when we complete any task of anytime the list changes
        // it will write it in the storage.
     }

     getItems():  ToDoItem[] {
        return this.items;
     }

     toggleItem(id: number): void{
        const item = this.items.find(i => i.id === id);
        if(item){
            item.complete =!item.complete;
        }
     }

     private saveToLocalStorage(): void { 
        localStorage.setItem('todos', JSON.stringify(this.items));

        }
     }


     //  now we will access the local store to try to get it back so that we can assign it to the todo list 
     // so that we can work with it. 
     const todolist = new ToDoList();


     const storedItems = localStorage.getItem('todos');
     if(storedItems) {
        todolist.items = JSON.parse(storedItems);
     }

     //adding item to the TodoList


     todolist.addItem('Eat 3 slices of Pizza');
     console.log('todo items', todolist.getItems());

