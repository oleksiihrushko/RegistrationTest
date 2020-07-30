import { validation, unvalidation } from './validators';

const loginDescr = document.querySelector('.loginDescr');
const passDescr = document.querySelector('.passDescr');
const secondPassDescr = document.querySelector('.secondPassDescr');
const okBtn = document.querySelector('.okBtn');

export const checkLogin = value => {
  value.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{4,9}$/)
    ? validation(loginDescr)
    : unvalidation(loginDescr);
};

export const checkPass = value => {
  value.match(
    /(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  )
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
