
var inputName = document.getElementById("inputName");
var inputEmail1 = document.getElementById("inputEmail1");
var inputPassword1 = document.getElementById("inputPassword1");
var btnUp = document.getElementById("btn");

btnUp.addEventListener("click", addInformation);
var signUp = [];
function addInformation() {
  if (validationPass()) {
    var infoRegister = {
      name: inputName.value,
      email: inputEmail1.value,
      password: inputPassword1.value,
    };
    signUp.push(infoRegister);
    localStorage.setItem("data", JSON.stringify(signUp));
    document.querySelector(".layer").style.display = "block";
    clearForm();
  } else {
    alert("The Password is less than digits");
  }

}

function clearForm() {
  inputName.value = "";
  inputEmail1.value = "";
  inputPassword1.value = "";
}

function validationPass() {
  var regexPass = /^[A-Z]{0,1}[0-9a-z]{8,}$/g;
  return regexPass.test(inputPassword1.value);
}

function closeMessage() {
  document.querySelector(".layer").style.cssText = "display: none;";
}
