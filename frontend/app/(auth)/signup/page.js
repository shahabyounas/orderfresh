
'use client'
import { useRouter } from "next/navigation";
import { useSignup } from "./useSignup";

export function signupPage(){
    const router = useRouter()
    const { errors, state, action, updateHandler } = useSignup();

    console.log("states--", state)

    function onClickHandler(){
        router.replace('/login')
    }
    return (
        <div className="md:w-1/3 w-5/6 bg-primary-100 py-16 px-4 h-3/2 rounded-xl">
          <form className="max-w-sm mx-auto" action={action}>
          <div className="mb-5">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First name"
              />
              {errors.firstName && <small className="text-red-600">{errors.firstName}</small>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="surname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Surname"
              />
              {errors.surname && <small className="text-red-600">{errors.surname}</small>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address or username"
              />
              {errors.email && <small className="text-red-600">{errors.email}</small>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.password && <small className="text-red-600">{errors.password}</small>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="cPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="cPassword"
                name="cPassword"
                placeholder="Repeat password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.cPassword && <small className="text-red-600">{errors.cPassword}</small>}
              {errors.match && <small className="text-red-600">{errors.match}</small>}
            </div>
            <button
              type="submit"
              className="text-black bg-white hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              SignUp
            </button>
            <p className="mt-1">
              <small> <b> Already have an account ? </b> </small>
              <button
                onClick={() => onClickHandler()}
                className="text-black bg-transparent hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      );
    
}


export default signupPage;