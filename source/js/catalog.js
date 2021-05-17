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


// фильтация по странам
{
  const filter = document.querySelector('.filter');
  const toggler = filter.querySelector('.filter__toggler');
  const country_box = filter.querySelector('.filter__country');
  const categories = filter.querySelector('.filter__category-list');
  const close_btn = filter.querySelector('.country-picker__close');
console.log(close_btn);

  toggler.addEventListener('click', event => {
    event.preventDefault();
    if( toggler.classList.contains('filter__toggler--toggled') ) {
      toggler.classList.remove('filter__toggler--toggled');
      country_box.classList.remove('filter__country-box--show');
      categories.classList.remove('filter__category-list--show');
    } else {
      toggler.classList.add('filter__toggler--toggled');
      country_box.classList.add('filter__country-box--show');
      categories.classList.add('filter__category-list--show');
    }
  });

  close_btn.addEventListener('click', event => {
    event.preventDefault();
      toggler.classList.remove('filter__toggler--toggled');
      country_box.classList.remove('filter__country-box--show');
      categories.classList.remove('filter__category-list--show');
  });
}
