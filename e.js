const loadmorebtn = document.getElementById("loadmore-btn");
const loadmorecontent = document.getElementById("loadmore-content");

loadmorebtn.addEventListener("click", () => {
  if (loadmorecontent.style.display === "none") {
    loadmorecontent.style.display = "flex";
    loadmorebtn.innerHTML = "Show Less";
    console.log("done");
  } else {
    loadmorecontent.style.display = "none";
    loadmorebtn.innerHTML = "Load More";
    console.log(" not done");
  }
});

function signup() {
  localStorage.clear();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("pass", pass);
}

function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  var logem = localStorage.getItem("email");
  var logps = localStorage.getItem("pass");

  if (logem === email && pass === logps) {
    localStorage.setItem("user", "login");
    window.location.href = "e.html";
    var loginBtn = document.getElementById("loginbtn");
    loginBtn.innerText = "Logg out";
  } else {
    alert("Plz enter correct id and password or signup");
  }
}
function logout() {
  alert("logout succes ful")
  var logout=localStorage.setItem("user","logout")
  if (user==login){
    window.location.href="home.html"
  }
  else {
    alert ( 'plz  login first' )
  }
}