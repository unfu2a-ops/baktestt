function updateClock() {
  const now = new Date();
  const ms = now.getMilliseconds();
  const seconds = now.getSeconds() + ms / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  document.getElementById("secondHand").style.transform = `rotate(${seconds * 6}deg)`;
  document.getElementById("minuteHand").style.transform = `rotate(${minutes * 6}deg)`;
  document.getElementById("hourHand").style.transform = `rotate(${hours * 30}deg)`;

  const pad = n => String(n).padStart(2, "0");
  document.getElementById("digitalClock").textContent =
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  const date = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);
  document.getElementById("dateLine").textContent = date;
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

updateClock();
setYear();
setInterval(updateClock, 50);
