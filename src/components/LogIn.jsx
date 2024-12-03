import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LogIn = () => {
  const [show, setShow] = useState(false);
  const { loginUser, setUser } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
    })
    .catch((error) => {
      console.log(error.code)
    })
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl p-6 border">
        <h1 className="font-semibold text-4xl text-center p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-indigo-500/50">
          Login your account
        </h1>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="btn btn-sm absolute right-2 top-11"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <label className="label">
            <Link to="" className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label>
          <div className="form-control mt-3">
            <button className="btn btn-neutral  hover:shadow-indigo-500/50 font-semibold  rounded-none">
              Login
            </button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Don’t Have An Account ?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
        <p className="py-2 text-center text-xl font-semibold">or</p>
        <div className="*:w-full py-4">
          <button className="btn">
            <FcGoogle /> Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
