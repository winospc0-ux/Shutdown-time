// Target: day 21 of the current month, at 00:00:00 (start of the day)
const now = new Date();
const target = new Date(now.getFullYear(), now.getMonth(), 21, 0, 0, 0);

// This countdown is only for day 21 of the current month.

// Display the target date in Arabic
const arabicMonths = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];
const formatted = `${target.getDate()} ${arabicMonths[target.getMonth()]} ${target.getFullYear()}`;
document.getElementById("target-date").textContent = `🎯 الهدف: ${formatted}`;

const daysEl    = document.getElementById("days");
const hoursEl   = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");

function updateCountdown() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    daysEl.textContent    = "00";
    hoursEl.textContent   = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";
    document.getElementById("target-date").textContent = "✅ انتهى العد لهذا الشهر!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const ms = diff % 1000;

  daysEl.textContent    = String(d).padStart(2, "0");
  hoursEl.textContent   = String(h).padStart(2, "0");
  minutesEl.textContent = String(m).padStart(2, "0");
  secondsEl.textContent = String(s).padStart(2, "0");
  millisecondsEl.textContent = String(ms).padStart(3, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
