import { useState } from "react";
import { signup } from "../../actions/auth"

export function useSignup(){
    const [state, setState] = useState({})
    const [errors, setErrors] = useState({})

    async function action(data){
        const resp = await signup(data)

        if(resp.errors){
            setErrors(resp.errors)
        }else {
            setErrors({})
            setState(resp)
        }
    }

    function updateHandler(state){

    }

    return {
        state,
        errors,
        action,
        updateHandler
    }
}