var inputEmail2 = document.getElementById("inputEmail2");
var inputPassword2 = document.getElementById("inputPassword2");
var btnIn = document.getElementById("btn1");

btnIn.addEventListener("click", addDataSign);
var signIn = [];
function addDataSign() {
  var storedData = localStorage.getItem("data");
  var parsedData = JSON.parse(storedData);

  var signInEmail = inputEmail2.value;
  var signInPassword = inputPassword2.value;

  var isLoggedIn = parsedData.some(function (user) {
    return user.email === signInEmail && user.password === signInPassword;
  });
  if (isLoggedIn) {
    window.location.href = "home.html";
  } else if (signInEmail == "" && signInPassword == "") {
    alert(" Email Empty And Password Empty");
  } else {
    alert("Invalid email or password");
  }
}
