let buying = document.getElementById("buy");

buying.addEventListener("click", DefinePurchase);

function DefinePurchase() {
  let names = document.getElementById("namePerson").value;

  let money = document.getElementById("money").value;

  if (money >= 0.6 && money < 1) {
    let answer = `
        <p> ${names}: buy yourself an ice cream agua</p> 
    `;
    document.getElementById("rooter").innerHTML = answer;
  } else if (money>= 1 && money < 1.7) {
    let answer = `
        <p> ${names}: buy yourself an ice cream crema</p> 
    `;
    document.getElementById("rooter").innerHTML = answer;
  } else if (money >= 1.7 && money < 1.8) {
    let answer = `
        <p> ${names}: buy yourself an ice cream Heladix</p> 
    `;
    document.getElementById("rooter").innerHTML = answer;
  } else if (money >= 1.8 && money < 2.9) {
    let answer = `
        <p> ${names}: buy yourself an ice cream Heladovich</p> 
    `;
    document.getElementById("rooter").innerHTML = answer;
  } else if (money >= 2.9) {
    let answer = `
        <p> ${names}: buy yourself an ice cream Heraldo y confites</p> 
    `;
    document.getElementById("rooter").innerHTML = answer;
  } else {
    let answer = `
        <p> ${names}: No tienes suficiente</p> 
    `;
    document.getElementById("rooter").innerHTML = answer;
  }
}
