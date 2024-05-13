import { useState } from "react";
import { login } from "../../actions/auth"

export function useLogin(){
    const [state, setState] = useState({})
    const [errors, setErrors] = useState({})

    async function action(data){
        const resp = await login(data)

        if(resp.errors){
            setErrors(resp.errors)
        }else {
            setErrors({})
            setState(resp)
        }
    }

    return {
        state,
        errors,
        action
    }
}