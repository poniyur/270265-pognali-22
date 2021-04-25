"use strict";

const levels = document.querySelectorAll('.lvl');

for (const lvl of levels) {
  const circle = lvl.querySelector('.lvl__circle');
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const percent = parseInt(lvl.querySelector('.lvl__text').innerHTML);

  setProgress(circle, circumference, percent);
}

function setProgress(circle, circumference, percent) {
  const offset = 3 + circumference - percent/ 100 * circumference;
  circle.style.strokeDashoffset = offset;
}
