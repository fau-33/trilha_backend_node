// type em arrays
let string: string[] = ["a", "b", "c"];
let number: number[] = [1, 2, 3];
let boolean: boolean[] = [true, false, true];
let object: object[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];
let array: any[] = [1, "a", true, { name: "John", age: 30 }];

console.log(string);
console.log(number);
console.log(boolean);
console.log(object);
console.log(array);

// type any
let qualquer: any = 1;
qualquer = "a";
qualquer = true;
qualquer = { name: "John", age: 30 };
qualquer = [1, "a", true, { name: "John", age: 30 }];

console.log(qualquer);
