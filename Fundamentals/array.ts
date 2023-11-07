let skills: string[] = [];

skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push("Software Design");

console.log(typeof skills, typeof skills[0]);

console.log(skills.length);

let series = [1, 2, 3];
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);

let even = series.filter((e) => e % 2 === 0);
console.log(even);