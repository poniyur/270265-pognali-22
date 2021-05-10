"use strict";


// stepper
{
  const stepper = document.querySelector('.stepper');
  const steps = stepper.querySelectorAll('.stepper__item');
  const next_btns = stepper.querySelectorAll('.stepper__next');
  const prev_btns = stepper.querySelectorAll('.stepper__prev');
  const points = document.querySelectorAll('.plan-creator__header-step');

  let current_index = 0;
  const max_step_index = steps.length - 1;

  for( let btn of next_btns ) {
    btn.addEventListener('click', event => {
      current_index++;
      if(current_index > max_step_index) {
        current_index = max_step_index;
      } else {
        changeStep();
      }
    });
  }

  for( let btn of prev_btns ) {
    btn.addEventListener('click', event => {
      current_index--;
      if(current_index < 0) {
        current_index = 0;
      } else {
        changeStep();
      }
    });
  }

  function changeStep() {
    for(let step of steps) {
      step.classList.remove('stepper__item--current');
      step.classList.remove('plan-creator__step--current');
    }

    for(let point of points) {
      point.classList.remove('plan-creator__header-step--current');
    }

    steps[current_index].classList.add('stepper__item--current');
    steps[current_index].classList.add('plan-creator__step--current');
    points[current_index].classList.add('plan-creator__header-step--current');

  }

}

// number_inputs
{
  const number_inputs = document.querySelectorAll('.number-input');

  for (const number_input of number_inputs) {
    const minus_btn = number_input.querySelector('.number-input__minus');
    const plus_btn = number_input.querySelector('.number-input__plus');
    const input = number_input.querySelector('.number-input__input');

    minus_btn.addEventListener('click', event => {
      let value = parseInt(input.value, 10);

      value = isNaN(value) ? 0 : value;
      value--;
      if( value < 0 ) {
        value = 0;
      } else {
        input.value = value;
      }
    });

    plus_btn.addEventListener('click', event => {
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
    });

  }
}



