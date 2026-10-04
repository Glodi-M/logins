import { useState } from "react";
import logo from "./logo.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import "./login.css";

const CardNav = ({ view, onSelect }) => (
  <ul className="card-nav">
    <li>
      <img src={logo} alt="Logo" />
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

const SignInForm = ({ onSwitch }) => <form className="signin"></form>;

const SignUpForm = ({ onSwitch }) => <form className="signup"></form>;

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
            title="welcome back"
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
          <SignInForm onSwitch={() => setView("signup")} />
          <SignUpForm onSwitch={() => setView("signin")} />
        </div>
      </div>
    </div>
  );
};
