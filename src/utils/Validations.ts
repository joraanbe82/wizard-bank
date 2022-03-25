export const ValidatePassword = (password: string) => {
  const validator = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,24}$/gm
  return validator.test(password)
}

// return 0 if are equals, return -1 | 1 if doesn't are equals
export const ComparePasswords = (pass: string, confirmPass: string) => {
  const compare = pass.localeCompare(confirmPass)
  return compare
}
