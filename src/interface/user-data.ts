export interface ILoginForm {
    email: string
    password: string
}

export const loginForm:ILoginForm = {
    email: '',
    password: ''
}

export interface IRegistrationForm {
    firstname: string
    lastname: string
    email: string
    password: string
    confirmPassword: string
}

export const registrationForm:IRegistrationForm = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
}
