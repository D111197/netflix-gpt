import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsignInForm] = useState(true);

  const toggleform = () => {
    setIsignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backGround"
        />
      </div>
      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            required
            className="p-2 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          required
          className="p-2 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-2 my-4 w-full  bg-gray-600"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleform}>
          {isSignInForm
            ? "new to Netflix? signup now"
            : "already member? signin now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
