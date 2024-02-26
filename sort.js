const list = [
  { name: "John", age: 25 },
  { name: "Jane", age: 23 },
  { name: "Jim", age: 30 },
  { name: "Jill", age: 27 },
  { name: "Jack", age: 22 },
];

const sortedList = list.sort((a, b) => a.age - b.age);
console.log(sortedList);
