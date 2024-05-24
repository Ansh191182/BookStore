import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const nameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();
  const [showError, setShowError] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userName = nameElement.current.value;
    const userEmail = emailElement.current.value;
    const userPassword = passwordElement.current.value;

    if (
      userName.length > 0 &&
      userPassword.length > 0 &&
      userEmail.length > 0
    ) {
      setShowError((prev) => prev);
      console.log(userName, userEmail, userPassword);
    } else {
      setShowError((prev) => !prev);
    }

    nameElement.current.value = "";
    passwordElement.current.value = "";
    emailElement.current.value = "";
  };
  return (
    <>
      <div>
        <div
          id="my_modal_3"
          className=" flex h-screen items-center justify-center"
        >
          <div className=" border-[2px] shadow-md p-5 rounded-md modal-box">
            <form method="dialog" onSubmit={handleOnSubmit}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className=" mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className=" w-80 px-3 py-1 border rounded-md outline-none"
                  ref={nameElement}
                />
                {showError === true ? (
                  <p className=" text-red-500 text-sm">
                    This field is required
                  </p>
                ) : (
                  ""
                )}
              </div>
              {/* Email */}
              <div className=" mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" w-80 px-3 py-1 border rounded-md outline-none"
                  ref={emailElement}
                />
                {showError === true ? (
                  <p className=" text-red-500 text-sm">
                    This field is required
                  </p>
                ) : (
                  ""
                )}
              </div>
              {/* Password */}
              <div className=" mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className=" w-80 px-3 py-1 border rounded-md outline-none"
                  ref={passwordElement}
                />
                {showError === true ? (
                  <p className=" text-red-500 text-sm">
                    This field is required
                  </p>
                ) : (
                  ""
                )}
              </div>
              {/* Button */}
              <div className=" flex justify-around mt-4">
                <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have account{" "}
                  <button className=" underline text-blue-500 cursor-pointer">
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Signup;
