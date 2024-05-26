import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidData } from "../Utiles/Validate";
import { auth } from "../Utiles/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utiles/UserSice";

const Login = () => {
  const [isSignInForm, setIsignInForm] = useState(true);

  const [errormessage, setErrormesssage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSUbmitbutton = () => {
    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;
    const namevalue = isSignInForm ? "" : name.current.value;
    const message = ValidData(emailvalue, passwordvalue, namevalue);
    setErrormesssage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D4D35AQG8DopwDNbtAA/profile-framedphoto-shrink_200_200/0/1689754818636?e=1717243200&v=beta&t=SGZIsH5HuP0wSGKXnICk5cqpMOUV5mfHIryRd_D-bmo",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browser");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrormesssage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormesssage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //signin

      signInWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormesssage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            required
            className="p-2 my-4 w-full bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          required
          className="p-2 my-4 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          required
          className="p-2 my-4 w-full  bg-gray-600"
        />
        <p className="text-red-500 font-lg py-2">{errormessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSUbmitbutton}
        >
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
