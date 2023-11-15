var MyEmployee = /** @class */ (function () {
    function MyEmployee(first_name, last_name, job_title) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.job_title = job_title;
        MyEmployee.headCount++;
    }
    MyEmployee.getHeadCount = function () {
        return MyEmployee.headCount;
    };
    MyEmployee.headCount = 0;
    return MyEmployee;
}());
var mary = new MyEmployee("Mary", "Doe", "Front-end Delevolper");
var dave = new MyEmployee("Dave", "Loper", "Back-end Delevolper");
console.log(MyEmployee.headCount);
