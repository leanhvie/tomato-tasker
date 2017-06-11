const NAME_REGEX = /^[a-z ,.'-]+$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const NOT_EMPTY_REGEX = /\S/;
const TIME_FORMAT_REGEX = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
const POSITIVE_INTEGER_REGEX = /^[1-9][0-9]*$/;

export function validateName(name) {
    return NAME_REGEX.test(name);
}

export function validateEmail(email) {
    return EMAIL_REGEX.test(email);
}

//Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number
export function validatePassword(password) {
    return PASSWORD_REGEX.test(password);
}

export function passwordMatch(password, repeatPassword) {
    return password == repeatPassword;
}

export function validateNotEmpty(input) {
    return NOT_EMPTY_REGEX.test(input);
}

export function validateInputLength(input, maxCharCount) {
    return input.length <= maxCharCount;
}

export function validateTimeInput(input) {
    return TIME_FORMAT_REGEX.test(input);
}

export function validatePositiveInteger(input) {
    return POSITIVE_INTEGER_REGEX.test(input);
}