import isEmail from "validator/lib/isEmail";
import tripleMe from "./tripleMe";
// not working for me?
console.log(isEmail("john@test.com"));
console.log(tripleMe(20));

document.querySelector("h1").textContent = "good morning!";

if (module.hot) {
  module.hot.accept();
}
