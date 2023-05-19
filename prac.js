
    function handleLoginClick() {
      var loginBtn = document.getElementById("loginBtn");
      var originalText = loginBtn.innerText;

      loginBtn.innerText = "Logging in...";

      setTimeout(function() {
        loginBtn.innerText = originalText;
      }, 2000); // Change back to original text after 2000 milliseconds (2 seconds)
    }
    handleLoginClick()