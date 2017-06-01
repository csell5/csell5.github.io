
fucntion sendMessage () {
  console.log("event called");
}

var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
