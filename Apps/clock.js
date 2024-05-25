setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
  document.getElementById("clock").innerHTML = date;
}