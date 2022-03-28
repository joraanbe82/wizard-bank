export const ValidatePassword = (password: string) => {
  const validator = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,24}$/gm
  return validator.test(password)
}

// return 0 if are equals, return -1 | 1 if doesn't are equals
export const ComparePasswords = (pass: string, confirmPass: string) => {
  const compare = pass.localeCompare(confirmPass)
  return compare
}

export const IsFormValid = (
  clue: string,
  confirmPass: string,
  errorPass: boolean,
  errorSamePass: boolean,
  pass: string
): boolean => {
  if (pass && confirmPass && clue) {
    return (
      pass.length >= 8 &&
      confirmPass.length >= 8 &&
      clue.length > 0 &&
      !errorPass &&
      !errorSamePass
    )
  }
  return false
}
