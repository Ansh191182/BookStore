import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const emailElement = useRef();
  const passwordElement = useRef();
  const [showError, setShowError] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userEmail = emailElement.current.value;
    const userPassword = passwordElement.current.value;

    if (userEmail.length > 0 && userPassword.length > 0) {
      setShowError((prev) => prev);
    } else {
      setShowError((prev) => !prev);
    }

    emailElement.current.value = "";
    passwordElement.current.value = "";
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleOnSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                ref={emailElement}
              />
              {showError === true ? (
                <p className=" text-red-500 text-sm">This field is required</p>
              ) : (
                ""
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                ref={passwordElement}
              />
              {showError === true ? (
                <p className=" text-red-500 text-sm">This field is required</p>
              ) : (
                ""
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                type="submit"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
