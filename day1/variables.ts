// Type annotations
let age: number = 25;
let firstName: string = "Sadiq";
let isStudent: boolean = true;

//Type inference (auto - detect types)
let city = "Berlin";
let score = 90;

// SPECIAL TYPES - any, unknown, null, undefined
let something: any = "can be anything";
something = 42; // allowed

//this is safer than any
let notSure: unknown = "could be anything";

let nothing: null = null;
let notAssigned: undefined = undefined;

// Arrays and Tuples
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Ali", "Sara", "Zara"];

let tuple: [string, number] = ["Age", 30];
