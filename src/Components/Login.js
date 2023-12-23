import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-2 w-full bg-gray-900 rounded-tr-sm"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-900 rounded-tr-sm"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full bg-gray-900 rounded-tr-sm"
        />
        <button className="p-2 my-9 w-full bg-red-700 rounded-tr-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?.sign Up now"
            : "Already Registered. Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
