import React from "react";
import SubTitle from "../utils/SubTitle";
import { Link } from "react-router-dom";
import RegisterHook from "../../customHooks/auth/RegisterHook";
import { Spinner } from "react-bootstrap";

const RegisterContainer = () => {
  const [
    loading,
    isPress,
    name,
    email,
    role,
    password,
    passwordConfirm,
    handleChangeName,
    handleChangeEmail,
    handleChangeRole,
    handleChangePassword,
    handleChangePasswordConfirm,
    handleSubmit,
  ] = RegisterHook();

  return (
    <div>
      <div className="container pt-4">
        <SubTitle pageName="تسجيل حساب جديد" />

        <form className="form p-3 bg-light rounded mt-3">
          <div className="mt-1">
            <label className="fw-bold" htmlFor="name">
              {" "}
              الاسم{" "}
            </label>
            <input
              value={name}
              onChange={handleChangeName}
              className="mt-1 form-control"
              type="text"
              id="name"
              placeholder="الاسم"
            />
          </div>

          <div className="mt-2">
            <label className="fw-bold" htmlFor="email">
              {" "}
              البريد الالكترونى{" "}
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
            <label className="fw-bold" htmlFor="role">
              {" "}
              الصلاحية{" "}
            </label>
            <select
              value={role}
              onChange={handleChangeRole}
              id="role"
              className="mt-1 form-control"
            >
              <option value="0"> حدد الصلاحية </option>
              <option value="user"> مستخدم عادى </option>
              <option value="trader"> تاجر </option>
            </select>
          </div>
          <div className="mt-2">
            <label className="fw-bold" htmlFor="password">
              {" "}
              كلمة المرور{" "}
            </label>
            <input
              value={password}
              onChange={handleChangePassword}
              id="password"
              className=" form-control mt-1"
              type="password"
              placeholder="كلمة المرور"
            />
          </div>
          <div className="mt-2">
            <label className="fw-bold" htmlFor="confirmPass">
              {" "}
              تأكيد كلمة المرور{" "}
            </label>
            <input
              value={passwordConfirm}
              onChange={handleChangePasswordConfirm}
              id="confirmPass"
              className=" form-control mt-1"
              type="password"
              placeholder="تأكيد كلمة المرور"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="btn main-btn mt-2 d-flex align-items-center gap-2"
          >
            <span>انشاء الحساب</span>
            {loading && isPress ? (
              <Spinner variant="light" animation="border" />
            ) : null}
          </button>

          <div className="mt-2 text-center">
            {" "}
            هل لديك حساب{" "}
            <Link
              style={{ color: "var(--main-color)" }}
              className="fw-bold"
              to="/login"
            >
              {" "}
              اضغط هنا{" "}
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterContainer;
