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



function checkin(){
  var loginbtn = document.getElementById("loginbtn");
  if(loginbtn.innerHTML=="login"){
    window.location.href="login.html"
    loginbtn.innerHTML="logout"
  }
  else{
    var logout=localStorage.setItem("user","logout")
    alert("logout succes ful")
    loginbtn.innerHTML="login";
  }
}


function signup() {
  localStorage.clear();
  alert("you are succesfully Register")

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("pass", pass);
  window.location.href="e.html"
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
// function logout() {
//   alert("logout succes ful")
//   var logout=localStorage.setItem("user","logout")
//   if (user==login){
//     window.location.href="home.html"
//   }
//   else {
//     alert ( 'plz  login first' )
//   }
// }
