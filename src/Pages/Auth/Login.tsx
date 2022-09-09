import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Hooks/ReduxHook";
import { useAuth } from "../../Hooks/useAuth";
import axios from "axios";

import "./Auth.css";

type Inputs = {
  username: string;
  password: string;
};
export interface stateType {
  from: string;
}
interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });

  const navigate = useNavigate();
  const location = useLocation().state as stateType;
  const Auth = useAuth();
  const error = useAppSelector((state) => state.users.error);

  const URL = "https://ffce-46-211-170-1.eu.ngrok.io/api/v1/login";

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post(
        URL,
        {
          username: data.username,
          password: data.password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((data) => console.log(data))
      .catch((er) => console.log(er));

    Auth?.signIn(data);
    navigate(`${location.from}`, {
      replace: true,
    });
  };
  return (
    <div className="LoginWrapper">
      <div className="LoginWrapper-left">
        <button onClick={() => navigate("/")} className="BackMain">
          <BsArrowLeft />
          Back to Main
        </button>
        <h1 className="LoginWrapper-title">Welcome!</h1>
        <h3>Sign in!</h3>
        <form className="formLogin" action="" onSubmit={handleSubmit(onSubmit)}>
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
            {/* {handleExist()} */}
            No account?
            <span
              onClick={() => {
                navigate("/register", { replace: true });
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
          <p style={{ color: "red" }}>{error}</p>

          <button
            type="submit"
            disabled={!isValid}
            className={isValid ? "submit" : "submit invalid"}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="LoginWrapper-right"></div>
    </div>
  );
};

export default Login;
