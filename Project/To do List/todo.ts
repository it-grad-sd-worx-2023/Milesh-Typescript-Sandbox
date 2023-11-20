class ToDoItem{
    constructor( public id: number , public text: string, public complete: boolean) {

        
    }
}

class ToDoList { 
     items : ToDoItem[] = [];

     addItem(text: string) : void {
        const newItem = new ToDoItem(this.items.length + 1, text, false);
        this.items.push(newItem);
     }

     getItem():  ToDoItem[] {
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
