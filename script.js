const input = document.querySelector("#input");
const calculateBtn = document.querySelector(".calcular");
const resetBtn = document.querySelector(".reiniciar");
const resultDiv = document.querySelector(".resultado");

calculateBtn.addEventListener("click", () => {
  clearDiv();
  let validate = validateInput();
  let h3 = document.createElement("h3");
  h3.innerText = validate;
  resultDiv.appendChild(h3);
});

function validateInput() {
  let currentYear = new Date().getFullYear();
  let result = currentYear - input.value;
  let finalResult = Number(result);
  if (input.value === "") {
    resultDiv.classList.add("error");
    return "O campo acima não pode ficar vazio!";
  } else if (isNaN(finalResult) || input.value < 1920) {
    resultDiv.classList.add("error");
    return `Não minta, você não é tão velho.`;
  } else if (input.value > 2022) {
    resultDiv.classList.add("error");
    return `Incrível, você ainda não nasceu e já digita :O !`;
  } else {
    resultDiv.classList.add("success");
    return `Você tem ${finalResult} anos de idade!`;
  }
}

function clearDiv() {
  resultDiv.innerText = "";
  resultDiv.classList.remove("error");
  resultDiv.classList.remove("success");
}

resetBtn.addEventListener("click", () => {
  input.value = "";
  clearDiv();
});
