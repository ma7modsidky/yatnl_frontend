import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";


function SignUp() {
    let navigate = useNavigate();
    // let { err, setErr } = useContext(AuthContext);
    let [error,setError] = useState(null)
    const initialSignUpData = Object.freeze({
      email: "",
      user_name: "",
      phone:"",
      password: "",
      password2: "",

    });
    const [signUpData, updateSignUpData] = useState(initialSignUpData);
    const handleSignUpChange = (e) => {
      updateSignUpData({
        ...signUpData,
        [e.target.name]: e.target.value.trim(),
      });
      console.log(signUpData);
    };
    const handleSignUp = (e) => {
      e.preventDefault();
      axiosInstance
        .post(`/user/create/`, {
          email: signUpData.email,
          user_name: signUpData.user_name,
          phone: signUpData.phone,
          password: signUpData.password,
          password2: signUpData.password2,
        })
        .then((res) => {
          navigate("/login", { replace: true });
          alert(
            "You have successfully created an account please login to continue"
          );
        })
        .catch((err) => {
          setError(err.response.data);
          console.log(error);
        });
    };
  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-secondary">
            Create a new account
          </h2>
        </div>
        <form class="mt-6 space-y-3" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">
                Username
              </label>
              <input
                id="username"
                name="user_name"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={handleSignUpChange}
                value={signUpData.user_name}
              />
            </div>
            <div>
              <label for="phone" class="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                autocomplete="username"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Phone"
                onChange={handleSignUpChange}
                value={signUpData.phone}
              />
            </div>
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleSignUpChange}
                value={signUpData.email}
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleSignUpChange}
                value={signUpData.password}
              />
            </div>
            <div>
              <label for="password2" class="sr-only">
                Confirm Password
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                onChange={handleSignUpChange}
                value={signUpData.password2}
              />
            </div>
          </div>

          {/* <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-secondary hover:text-secondary"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div> */}
          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              onClick={handleSignUp}
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-orange-300 group-hover:text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Submit
            </button>
          </div>
        </form>
        {error ? (
          <div>
            {Object.keys(error).map((err, index) => (
                <div key={index} class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span class="font-medium">{err} </span>{error[err]}
                </div>
            //   <div key={index}>{error[err]}</div>
            ))}
          </div>
        ) : null}
        <div>
          <Link
            to="/login"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Already Have an account , Sign in Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp