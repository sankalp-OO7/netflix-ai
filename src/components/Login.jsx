import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import {
  formValidationLogIn,
  formValidationSignup,
} from "../utils/formValidation.jsx";
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [err, setErr] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const passward = useRef(null);

  const loginToggle = () => {
    setIsLogin(!isLogin);
  };
  const HandleClick = () => {
    if (isLogin) {
      setErr(formValidationLogIn(email.current.value, passward.current.value));
    } else {
      setErr(
        formValidationSignup(
          name.current.value,
          email.current.value,
          passward.current.value
        )
      );
    }
  };
  return (
    <div>
      {" "}
      <div className="">
        <Header />
        <img
          className="absolute bg-cover object-cover min-h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg"
          alt="hero image"
        />
        <div>
          {" "}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=" relative w-3/12  flex items-center justify-center  flex-col   bg-black  opacity-80 rounded-2xl top-70 left-[40%]  gap-4     z-20 py-12"
          >
            <p className="text-white   text-5xl text-center">
              {isLogin ? "Log In" : "Sign UP"}
            </p>
            {!isLogin && (
              <input
                ref={name}
                type="text"
                placeholder="UserName"
                className="bg-gray-800 text-white  border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="bg-gray-800 text-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              ref={passward}
              type="password"
              placeholder="Password"
              className="bg-gray-800 text-white  border-gray-900 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-1xl font-bold text-red-600">{err}</p>
            <button
              type="submit"
              onClick={HandleClick}
              className="bg-red-800 cursor-pointer w-[280px] hover:bg-red-600 text-white   border-gray-900 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              Submit
            </button>
            <p className=" text-white cursor-pointer" onClick={loginToggle}>
              {isLogin
                ? "Dont have Account ? SignUp"
                : "have a Account? Log In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
