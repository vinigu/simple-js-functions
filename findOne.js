const items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
  { id: 6, name: "item 6" },
  { id: 7, name: "item 7" },
  { id: 8, name: "item 8" },
  { id: 9, name: "item 9" },
  { id: 10, name: "item 10" },
];

const item = items.find((item) => item.id === 5);
console.log(item);
