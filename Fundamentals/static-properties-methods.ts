class MyEmployee {
    static headCount: number = 0;
  
    constructor(
      private first_name: string,
      private last_name: string,
      private job_title: string
    ) {
      MyEmployee.headCount++;
    }
  
    public static getHeadCount() {
      return MyEmployee.headCount;
    }
  }
  
  let mary = new MyEmployee("Mary", "Doe", "Front-end Delevolper");
  let dave = new MyEmployee("Dave", "Loper", "Back-end Delevolper");
  
  console.log(MyEmployee.headCount);