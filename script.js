const amountInput = document.querySelector("#amount");
const percentInput = document.querySelector("#percent");
const valueEl = document.querySelector("#value");

function calculateValue() {
  valueEl.innerText = `$ ${humanizeNumber(
    Math.round(
      (asNumber(amountInput.value) * 100) / asNumber(percentInput.value)
    )
  )}`;
}

function humanizeNumber(num) {
  num = num.toString().split(".");
  num[0] = num[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return num.join(".");
}

function handleInput(ev) {
  if (ev.currentTarget.value !== "") {
    calculateValue();
    ev.currentTarget.value = humanizeNumber(
      asNumber(ev.currentTarget.value)
    );
  }
}

function asNumber(inputVal) {
  return parseInt(inputVal.replace(/,/g, "").replace(/\./g, ""), 10);
}

function init(){
  amountInput.addEventListener("input", handleInput, false);
  percentInput.addEventListener("input", handleInput, false);
}

init();
