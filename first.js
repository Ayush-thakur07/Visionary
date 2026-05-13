function redirect() {
    document.getElementById("Button").innerHTML = "Redirecting...";
    setTimeout(function(){
        window.location.href = "contact.html";
    }, 2000);
}
function typewriter(text, elementId, speed = 50) {
  let i = 0;
  const el = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
setTimeout(() => {
  typewriter("THE", "first");
}, 2000);

setTimeout(() => {
  typewriter("Work", "second");
}, 3000);

setTimeout(() => {
  typewriter("Partner", "third");
}, 4000);

setTimeout(() => {
  typewriter("Ayush Thakur", "fourth");
}, 5000);
