import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const RegisterPage = () => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mx-auto">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-20 w-auto rounded-full"
          src={logo}
          alt="Your Company"
        />
        <h2 class="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create An Account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="fullName"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Full Name
            </label>
            <div class="mt-2">
              <input
                type="fullName"
                name="fullName"
                id="fullName"
                autocomplete="fullName"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="confirmPassword"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div class="mt-2">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="flex flex-row justify-center items-center mt-10">
          <p class="text-center text-sm/6 text-gray-500">Already Registered?</p>
          <NavLink to="/sign-in">
            <p class="ml-2 font-semibold text-indigo-600 hover:text-indigo-500">
              Login Here!
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
