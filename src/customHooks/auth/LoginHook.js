import { useEffect, useState } from "react";
import { notify } from "../../components/utils/NotifyComponent";
import { validationEmail } from "../utils/validationEmail.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";

const validation = (email, password) => {
  if (!password || !email) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }
  if (!validationEmail(email)) {
    notify("من فضلك ادخل ايميل صحيح", "warn");
    return false;
  }
  if (password.length < 4) {
    notify("يجب ان تكون كلمة المرور اكبر من 3 حروف", "warn");
    return false;
  }
  return true;
};

const LoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation(email, password)) {
      return false;
    }
    const data = {  email, password };
    // send data
    setLoading(true);
    setIsPress(true);
    await dispatch(login(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.auth.login);

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        setEmail("");
        setPassword("");
        localStorage.user = JSON.stringify(response.data.data)
        localStorage.token = `Bearer ${response.data.token}`
        setTimeout(() => {
          window.location.href = '/'
        }, 1000);
        return notify("تم تسجيل الدخول بنجاح", "success");
      }
      if (
        response.status != 200 &&
        response.data &&
        response.data.errors &&
        response.data.errors[0].msg == "mail or password is incorrect"
      ) {
        return notify("البريد الالكترونى او كلمة المرور غير صحيحين", "error");
      }
      if (
        response.status != 200 &&
        response.data &&
        response.data.errors &&
        response.data.errors[0].msg != "mail or password is incorrect"
      ) {
        return notify("حدث خطأ اثناء تسجيل الدخول حاول مجددا فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  ];
};

export default LoginHook;
