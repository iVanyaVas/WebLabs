import words from "./words.js";
export default class Model {
  constructor(tests) {
    this.tests = tests;
    this.words = words;
  }

  checkTests(answers) {
    let count = answers.reduce((acc, val) => acc + val);
    console.log(count);
    switch (3 - count) {
      case 0: {
        alert("0 errors, very good result!");
        break;
      }
      case 1: {
        alert("1 error, good result!");
        break;
      }
      case 2: {
        alert("2 errors, bad result!");
        break;
      }
      case 3: {
        alert("3 errors, very bad result!");
        break;
      }
      default: {
        break;
      }
    }
    fetch("http://localhost:3000/set", {
      method: "POST",
      body: JSON.stringify({ count: count }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
