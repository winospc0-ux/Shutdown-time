const now = new Date();
const target = new Date(now.getFullYear(), now.getMonth(), 21, 0, 0, 0, 0);
const monthNames = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const targetDateEl = document.getElementById('target-date');
const progressEl = document.getElementById('progress');
const monthText = `${target.getDate()} ${monthNames[target.getMonth()]} ${target.getFullYear()}`;
const monthStart = new Date(target.getFullYear(), target.getMonth(), 1);

targetDateEl.textContent = `21 — ${monthText}`;

function setValues(days, hours, minutes, seconds, milliseconds) {
  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
  millisecondsEl.textContent = String(milliseconds).padStart(3, '0');
}

function updateCountdown() {
  const current = new Date();
  const difference = target - current;

  if (difference <= 0) {
    setValues(0, 0, 0, 0, 0);
    targetDateEl.textContent = 'انتهى العد لهذا الشهر';
    progressEl.style.transform = 'scaleX(0)';
    return;
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference / 3600000) % 24);
  const minutes = Math.floor((difference / 60000) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  const milliseconds = difference % 1000;
  const elapsed = Math.max(0, Math.min(1, (current - monthStart) / (target - monthStart)));

  setValues(days, hours, minutes, seconds, milliseconds);
  progressEl.style.transform = `scaleX(${1 - elapsed})`;
  requestAnimationFrame(updateCountdown);
}

updateCountdown();
