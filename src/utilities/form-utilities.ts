import {computed, reactive} from "vue";
import {required, email, minLength, sameAs, helpers} from '@vuelidate/validators';
import {registrationForm, IRegistrationForm, ILoginForm, loginForm} from "../interface/user-data.ts";

const passwordRegex = helpers.regex(/^[A-Za-z\d]{6,}$/)

export const registrationState = reactive<IRegistrationForm>(registrationForm);
export const loginState = reactive<ILoginForm>(loginForm)


export const loginRules = computed(() => ({
        email: {
            required: helpers.withMessage('Email is require', required),
            email
        },
        password: {
            required:helpers.withMessage('Password is require', required),
        },
}));


export const registrationRules = computed(() => ({
        firstname: {
            required: helpers.withMessage('First Name is require', required),
            minLength: minLength(1) },
        lastname: {
            required:helpers.withMessage('Last Name is require', required),
            minLength: minLength(1) },
        email: {
            required: helpers.withMessage('Email is require', required),
            email
        },
        password: {
            required:helpers.withMessage('Password is require', required),
            minLength: helpers.withMessage('Password must contain at least 6 characters', minLength(6)),
            regex: passwordRegex,
        },
        confirmPassword: {
            required:helpers.withMessage('Confirm password is require', required),
            sameAs: sameAs(registrationState.password)
        },
}));
