import { validation, unvalidation } from './validators';

const loginDescr = document.querySelector('.loginDescr');
const passDescr = document.querySelector('.passDescr');
const secondPassDescr = document.querySelector('.secondPassDescr');
const okBtn = document.querySelector('.okBtn');

export const checkLogin = value => {
  value.length > 4 && value.length < 11
    ? validation(loginDescr)
    : unvalidation(loginDescr);
};

export const checkPass = value => {
  value.length > 7 && value.length < 17
    ? validation(passDescr)
    : unvalidation(passDescr);
};

export const checkSecondPass = (firstPass, secondPass) => {
  firstPass === secondPass
    ? validation(secondPassDescr)
    : unvalidation(secondPassDescr);
};

export const checkOkBtn = () => {
  if (
    loginDescr.classList.contains('valid') &&
    passDescr.classList.contains('valid') &&
    secondPassDescr.classList.contains('valid')
  ) {
    okBtn.disabled = false;
  } else {
    okBtn.disabled = true;
  }
};
