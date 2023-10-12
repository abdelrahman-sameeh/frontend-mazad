import { useEffect, useState } from "react";
import { notify } from "../../components/utils/NotifyComponent";
import { validationEmail } from "../utils/validationEmail.js";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";

const validation = (name, email, role, password, passwordConfirm) => {
  if (!name || !email || role === "0" || !password || !passwordConfirm) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }
  if (name.length < 2) {
    notify("ادخل اسم اكبر من حرفين", "warn");
    return false;
  }
  if (!validationEmail(email)) {
    notify("من فضلك ادخل ايميل صحيح", "warn");
    return false;
  }
  if (password != passwordConfirm) {
    notify("يجب ان يكون تأكيد كلمة المرور وكلمة المرور متشابهين", "warn");
    return false;
  }
  if (password.length < 4) {
    notify("يجب ان تكون كلمة المرور اكبر من 3 حروف", "warn");
    return false;
  }
  return true;
};

const RegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("0");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeRole = (e) => setRole(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation(name, email, role, password, passwordConfirm)) {
      return false;
    }
    const data = { name, email, role, password, passwordConfirm };
    // send data
    setLoading(true);
    setIsPress(true);
    await dispatch(register(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.auth.register);

  useEffect(() => {
    if (!loading) {
      if (response.status === 201) {
        setName("");
        setEmail("");
        setRole("0");
        setPassword("");
        setPasswordConfirm("");
        setTimeout(() => {
          window.location.href = '/login'
        }, 1000);
        return notify("تم انشاء الحساب بنجاح", "success");
      }
      if (
        response.status != 201 &&
        response.data &&
        response.data.errors &&
        response.data.errors[0].msg == "this email already used"
      ) {
        return notify("هذا الايميل مستخدم بالفعل", "error");
      }
      if (
        response.status != 201 &&
        response.data &&
        response.data.errors &&
        response.data.errors[0].msg != "this email already used"
      ) {
        return notify("حدث خطأ اثناء الانشاء حاول مجددا فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [
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
  ];
};

export default RegisterHook;
