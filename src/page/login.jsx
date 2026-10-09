import { useState } from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import "./login.css";

const CardNav = ({ view, onSelect }) => (
  <ul className="card-nav">
    <li>
      <i className="ai-home home"></i>
      <span className="active-bar"></span>
    </li>
    <li>
      <button
        type="button"
        className={`signin ${view === "signin" ? "active" : ""}`}
        onClick={() => onSelect("signin")}
      >
        <i className="ai-person-check"></i>
        <span>Sign In</span>
      </button>
    </li>
    <li>
      <button
        type="button"
        className={`signup ${view === "signup" ? "active" : ""}`}
        onClick={() => onSelect("signup")}
      >
        <i className="ai-person-add"></i>
        <span>Sign Up</span>
      </button>
    </li>
  </ul>
);

const Hero = ({ variant, title, subtitle }) => (
  <div className={`card-hero-content ${variant}`}>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <a className="terms">
      Terms &amp; Conditions
      <i className="ai-download"></i>
    </a>
  </div>
);

const Socials = () => (
  <>
    <p>Or sign in with</p>
    <div className="socials">
      <button type="button">
        <img src={google} alt="Google" />
      </button>
      <button type="button">
        <img src={facebook} alt="Facebook" />
      </button>
      <button type="button">
        <img src={apple} alt="Apple" />
      </button>
    </div>
  </>
);
const PasswordField = ({ id }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="field">
      <label htmlFor={id}>Password</label>
      <div className="input">
        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder="••••••••••••"
        />
        <button type="button" onClick={() => setVisible(!visible)}>
          <i className={visible ? "ai-eye-open" : "ai-eye-slashed"}></i>
        </button>
      </div>
    </div>
  );
};
const SignInForm = ({ onSwitch, inactive }) => (
  <form className="signin" inert={inactive} onSubmit={(e) => e.preventDefault()}>
    <p>
      Don't have an account? <a onClick={onSwitch}>Sign Up</a>
    </p>
    <div className="field">
      <label htmlFor="signin-email">Email</label>
      <div className="input">
        <input
          type="email"
          id="signin-email"
          placeholder="youremail@gmail.com"
        />
        <i className="ai-envelope"></i>
      </div>
    </div>
    <PasswordField id="signin-password" />
    <div className="options">
      <label className="remember">
        <input type="checkbox" defaultChecked />
        Remember
      </label>
      <a className="forgot">Forgot password?</a>
    </div>

    <button type="submit" className="btn-primary">
      Sign In
    </button>
    <Socials />
  </form>
);

const SignUpForm = ({ onSwitch, inactive }) => (
  <form className="signup" inert={inactive} onSubmit={(e) => e.preventDefault()}>
    <p>
      Already have an account? <a onClick={onSwitch}>Sign In</a>
    </p>
    <div className="field">
      <label htmlFor="signup-username">Username</label>
      <div className="input">
        <input id="signup-username" type="text" placeholder="myusername" />
        <i className="ai-person"></i>
      </div>
    </div>
    <div className="field">
      <label htmlFor="signup-email">Email</label>
      <div className="input">
        <input
          id="signup-email"
          type="email"
          placeholder="youremail@gmail.com"
        />
        <i className="ai-envelope"></i>
      </div>
    </div>
    <PasswordField id="signup-password" />

    <button type="submit" className="btn-primary">
      Sign Up
    </button>
    <Socials />
  </form>
);

export const Login = () => {
  const [view, setView] = useState("signin");
  return (
    <div className={`card ${view}`}>
      <CardNav view={view} onSelect={setView} />

      <div className="card-hero">
        <div className="card-hero-bg"></div>
        <div className="card-hero-inner">
          <Hero
            variant="signin"
            title="Welcome back"
            subtitle="Please enter your credentials"
          />
          <Hero
            variant="signup"
            title="Join us today"
            subtitle="Creating an account is quick"
          />
        </div>
      </div>

      <div className="card-form">
        <div className="forms">
          <SignInForm
            onSwitch={() => setView("signup")}
            inactive={view !== "signin"}
          />
          <SignUpForm
            onSwitch={() => setView("signin")}
            inactive={view !== "signup"}
          />
        </div>
      </div>
    </div>
  );
};
