let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign-Up Confirmed. Updates coming soon!");
});

  function reset() {
    document.getElementById("form").reset();
  }
   