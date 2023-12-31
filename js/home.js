var nameH1 = document.getElementById("myName");
function localData() {
  var storedData = localStorage.getItem("data");
  var parsedData = JSON.parse(storedData);
  parsedData.some(function (user) {
    nameH1.innerHTML = user.name;
  });
}
localData();

var logoutBtn = document.querySelector(".nav-link");
logoutBtn.addEventListener("click", logout);
function logout() {
  localStorage.removeItem("data");
  window.location.href = "index.html";
}

var myHttp = new XMLHttpRequest();
myHttp.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9e12cb5fecb4ccd8659095f4d3145b6"
);
myHttp.send();

var allItems = [];
myHttp.addEventListener("readystatechange", function () {
  if (myHttp.readyState == 4) {
    allItems = JSON.parse(myHttp.response).articles;
    displayItem();
  }
});

function displayItem() {
  column = ``;
  for (var i = 0; i < allItems.length; i++) {
    column += ` <div class="col-lg-3">
    <div class="card">
        <img src="${allItems[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${allItems[i].title}</h5>
            <p class="card-text">${allItems[i].description}</p>
            <p class="card-text">${allItems[i].publishedAt}</p>
        </div>
    </div>
</div>
    `;
  }
  document.getElementById("row").innerHTML = column;
}
