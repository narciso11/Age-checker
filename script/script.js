function verify() {
  var date = new Date(); // Get the current date
  var year = date.getFullYear(); // Get the current year
  var result = document.getElementById("result");
  var submit = document.getElementById("submit");
  var input = document.getElementById("input");
  var exchange = Number(input.value);

  // If an input has no value and if the typed age passes the current age
  if (exchange === 0) {
    alert("[Error] Fill in the field and try again");
  } else if (exchange > year) {
    alert("Sorry! No one must have been born in that year");
  } else {
    // Calculate the age entered by the user if the parameters ara cleared
    var sum = year - exchange;
    var label = document.getElementsByName("radioSex");
    var gender = "";
    var img = document.createElement("img");
    img.setAttribute("id", "picture");
  }
  if (label[0].checked) {
    if (sum >= 0 && sum <= 12) {
      // This code adds the child's picture dynamically

      img.setAttribute("src", "/img/crianca-homem.png");
    } else if (sum >= 13 && sum <= 27) {
      // ...adds the young's picture dynamically
      img.setAttribute("src", "/img/jovem-masculino.png");
    } else if (sum <= 55) {
      //...adds the adult's picture dynamically
      img.setAttribute("src", "/img/homem-senhor.png");
    } else {
      // ...adds the old man's picture dynamically
      img.setAttribute("src", "/img/velho.png");
    }
    gender = "Man";
  } else if (label[1].checked) {
    if (sum >= 0 && sum <= 12) {
      // This code adds the child's picture dynamically

      img.setAttribute("src", "/img/crianca-mulher.png");
    } else if (sum >= 13 && sum <= 27) {
      // ...adds the young's picture dynamically
      img.setAttribute("src", "/img/jovem-feminino.png");
    } else if (sum <= 55) {
      //...adds the adult's picture dynamically
      img.setAttribute("src", "/img/mulher-senhora.png");
    } else {
      // ...adds the old woman's picture dynamically
      img.setAttribute("src", "/img/velha.png");
    }
    gender = "Woman";
  }
  result.style.textAlign = "center";
  result.innerHTML = `Checked! You are${gender} of ${sum} years old.`;
  result.appendChild(img); // Add a child element with image dynamically
  input.value = "";
  input.focus(); // Makes the placeholder text focused
  img.style.textAlign = "center";
}
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit.click();
  }
});
