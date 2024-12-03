import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const [show, setShow] = useState(false);
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        // get user data for create
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
    
        const passregex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passregex.test(password)){
          alert('password validation')
          return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            const createTime = user.metadata.
            creationTime;
            console.log(user)
            // save user on database
            const newUser = {name, email, photo, createTime}
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        })
        .catch(error => {
            console.log(error.code)
        })
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        data-aos="zoom-in-left"
        className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl p-6 border"
      >
        <h1 className="font-semibold text-4xl text-center p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-indigo-500/50">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none font-semibold">
              Register
            </button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already Have An Account ?
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
        <p className="py-2 text-center text-xl font-semibold">or</p>
        <div className="*:w-full py-4">
          <button className="btn">
            <FcGoogle /> Register with Google
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Register;
