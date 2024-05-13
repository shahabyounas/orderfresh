import { 
    LoginFormSchema, 
    SignupFormSchema 
} from '@/app/lib/definitions'

export {
    login, 
    signup,
}

async function login(formData){

    const email = formData.get('email')
    const password = formData.get('password')


    const validateFields = LoginFormSchema.safeParse({
        email: email,
        password: password,
    })

    if(!validateFields.success){
        return {
            errors: validateFields.error.flatten().fieldErrors
        }
    }

    return { success:  200, email, password }

}


async function signup(formData){

    const firstName = formData.get('firstName')
    const surname = formData.get('surname')
    const email = formData.get('email')
    const password = formData.get('password')
    const cPassword = formData.get('cPassword')


    const validateFields = SignupFormSchema.safeParse({
        firstName,
        surname,
        email,
        password,
        cPassword,
    })

    if(!validateFields.success){
        return {
            errors: validateFields.error.flatten().fieldErrors
        }
    }

    if(password !== cPassword){
        return {
            errors: { match: "Please enter matching password" }
        }
    }

    return { success:  200, email, password, firstName, surname, cPassword }

}