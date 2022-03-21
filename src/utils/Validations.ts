export default function ValidatePassword(password: string) {
	const validator = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,24}$/gm
	return validator.test(password)
}
