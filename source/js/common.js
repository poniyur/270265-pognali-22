"use strict";

// lvls
{
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
}


//burger header
{
  const nav = document.querySelector('.nav');
  const nav__toggler = nav.querySelector('.nav__toggler');
  nav__toggler.addEventListener('click', event => {
    let is_open = true;
    if( nav.classList.contains('nav--closed') ) is_open = false;

    if( is_open ) {
      nav.classList.add('nav--closed');
      nav__toggler.classList.remove('burger-button--cross');
    } else {
      nav.classList.remove('nav--closed');
      nav__toggler.classList.add('burger-button--cross');
      nav__toggler.classList.add('burger-button--cross');
    }
  });
}
