"use strict";
// Type annotations
let age = 25;
let firstName = "Sadiq";
let isStudent = true;
//Type inference (auto - detect types)
let city = "Berlin";
let score = 90;
// SPECIAL TYPES - any, unknown, null, undefined
let something = "can be anything";
something = 42; // allowed
//this is safer than any
let notSure = "could be anything";
let nothing = null;
let notAssigned = undefined;
// Arrays and Tuples
let numbers = [1, 2, 3];
let names = ["Ali", "Sara", "Zara"];
let tuple = ["Age", 30];
let val = "Sadiq";
if (typeof val === "string") {
    console.log(val.toUpperCase());
}
