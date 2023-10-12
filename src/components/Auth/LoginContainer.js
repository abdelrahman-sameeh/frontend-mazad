import React from "react";
import SubTitle from "../utils/SubTitle";
import { Link } from "react-router-dom";
import LoginHook from "../../customHooks/auth/LoginHook";
import { Spinner } from "react-bootstrap";

const LoginContainer = () => {
  const [
    loading,
    isPress,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  ] = LoginHook();
  return (
    <div>
      <div className="container pt-4">
        <SubTitle pageName="تسجيل الدخول" />

        <form className="form p-3 bg-light rounded mt-3">
          <div className="mt-2">
            <label className="fw-bold" htmlFor="email">
              البريد الالكترونى
            </label>
            <input
              value={email}
              onChange={handleChangeEmail}
              className="mt-1 form-control"
              id="email"
              type="text"
              placeholder="الايميل"
            />
          </div>

          <div className="mt-2">
            <label className="fw-bold" htmlFor="password">
              كلمة المرور
            </label>
            <input
              value={password}
              onChange={handleChangePassword}
              className="mt-1 form-control"
              type="password"
              id="password"
              placeholder="كلمة المرور"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="btn main-btn mt-2 d-flex align-items-center gap-2"
          >
            <span>تسجيل الدخول</span>
            {loading && isPress ? (
              <Spinner animation="border" variant="light" />
            ) : null}
          </button>

          <div className="mt-2 text-center">
            ليس لديك حساب{" "}
            <Link
              style={{ color: "var(--main-color)" }}
              className="fw-bold"
              to="/register"
            >
              اضغط هنا
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
