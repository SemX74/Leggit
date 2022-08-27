import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./Auth.css";
interface LoginProps {}

type Inputs = {
  email:string;
  username: string;
  password: string;
};
const Login = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="LoginWrapper">
      <div className="LoginWrapper-right"></div>
      <div className="LoginWrapper-left">
      <button onClick={() => navigate("/")} className="BackMain">
        <BsArrowLeft />
        Back to Main
      </button>
        <h1 className="LoginWrapper-title">Welcome!</h1>
        <h3>Register</h3>
        <form className="formLogin" action="">
        <label>Email</label>
          <input
          type="email"
            style={
              errors?.email
                ? { background: "#ffcfcf" }
                : { background: "white" }
            }
            className="input"
            {...register("email", {
              required: "Email is requied",
              minLength: {
                value: 5,
                message: "Email has to contain at least 5 symbols!",
              },
              maxLength: {
                value: 15,
                message: "Email has to contain at least 15 symbols!",
              },
            })}
          />
          <label>Username</label>
          <input
            style={
              errors?.username
                ? { background: "#ffcfcf" }
                : { background: "white" }
            }
            className="input"
            {...register("username", {
              required: "Username is requied",
              minLength: {
                value: 5,
                message: "Username has to contain at least 5 symbols!",
              },
              maxLength: {
                value: 15,
                message: "Username has to contain at least 15 symbols!",
              },
            })}
          />
          <label>Password</label>
          <input
            style={
              errors?.password
                ? { background: "#ffcfcf" }
                : { background: "white" }
            }
            className="input"
            type="password"
            {...register("password", {
              required: "Password is requied",
              minLength: {
                value: 5,
                message: "Password has to contain at least 5 symbols!",
              },
              maxLength: {
                value: 20,
                message: "Password has to contain maximum 20 symbols!",
              },
            })}
          />
          <p className="alredyEx">
            Already have account?
            <span
              onClick={() => {
                navigate('/login', {replace:true})
                reset();
              }}
              className="link"
            >
              Click here
            </span>
          </p>
          <div className="error" style={{ marginTop: ".4em" }}>
            {errors?.password && (
              <p className="error error_password">
                {errors?.password?.message || "Try again"}
              </p>
            )}
          </div>
          <div className="error">
            {errors?.username && (
              <p className="error">
                {errors?.username?.message || "Try again"}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={isValid ? "submit" : "submit invalid"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
