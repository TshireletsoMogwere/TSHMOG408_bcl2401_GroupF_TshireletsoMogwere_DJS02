const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === "" || divider === "") {
    throw Error("Division not performed. Both values are required in inputs.Try again");
  }
  if (divider === '0') {
    throw Error("Division not performed. Invalid number provided. Try again");
  }
  if (isNaN(dividend) || isNaN(divider)) {
    throw Error("“Something critical went wrong. Please reload the page");
  }
  result.innerText = Math.floor(dividend / divider);
});