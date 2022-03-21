function ValidatePassword(password: string) {
	const validator = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,24}$/gm
	return validator.test(password)
}

function ComparePasswords(pass: string, confirmPass: string) {
	const compare = pass.localeCompare(confirmPass)
	return compare
}

export { ValidatePassword, ComparePasswords }
