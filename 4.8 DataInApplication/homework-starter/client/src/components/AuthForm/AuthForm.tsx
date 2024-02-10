import { useState } from "react";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";

import "./AuthForm.css";

export const AuthForm = () => {
  const [authType, setAuthType] = useState<string>("register");

  const changeAuthState = () => {
    setAuthType((prevState) =>
      prevState === "register" ? "auth" : "register",
    );
  };

  return (
	  <div className="auth-form">
		  <div>
			  <p className="auth-form__title">
				  {authType === "register" ? "Регистрация" : "Авторизация"}
			  </p>
			  {authType === "register" ?
				  <RegisterForm changeAuthState={changeAuthState}/>
				  : <LoginForm />
			  }
			  <div className="auth-form__info">
              <span>
                  {authType === "register" ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}
              </span>
				  <button className="auth-form__button" onClick={changeAuthState}>
					  {authType === "register" ? "Войти" : "Создать аккаунт"}
				  </button>
			  </div>
		  </div>
	  </div>
  );
};
