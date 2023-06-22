/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuhtProvider";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  useTitle("Register")
  const { createUser, singInWithGoogle} =
    useContext(AuthContext);
  const [error, setError ] = useState("")
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (event) => {
    setError("")
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if(password.length<6){
      setError("Password Should Be 6 character long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError("")
        event.target.reset();
        
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
      });

  };
  const handelClick = (event) => {
    setAccepted(event.target.checked);
  };

  const handelGoogleClick = () => {
    singInWithGoogle()
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" w-96 bg-base-200 my-5  m-auto">
      <form onSubmit={handleRegister}>
        <div className="rounded-lg shadow-2xl bg-base-100 p-5">
          <h1 className=" text-center text-2xl font-bold">Please Register</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              name="photo"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <p className="mt-1 text-red-500">{error}</p>
          </div>
          <div className="form-control">
            <label className="px-2 mt-4 cursor-pointer">
              <input
                onClick={handelClick}
                type="checkbox"
                className="checkbox"
                label="Accept Terms and Condition"
              />
              <span className="pl-3">
                Accept{" "}
                <Link to="/terms" className=" link text-blue-600">
                  Terms and Condition
                </Link>
              </span>
            </label>
            
          </div>
          
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              disabled={!accepted}
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="pt-5">
            <p className=" text-center font-serif">Or</p>
            <div className=" pt-3 flex text-center justify-center">
              <p className="mr-2 -ml-5 font-serif">Register With:</p>
              <Link className=" text-3xl mr-5" onClick={handelGoogleClick}>
                <FcGoogle></FcGoogle>
              </Link>
            </div>
            <p className="pt-3 pl-1 pb-2 font-serif">
              All Ready have an account? 
              <Link to="/login" className=" link text-blue-600">
                Login
              </Link>
            </p>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
