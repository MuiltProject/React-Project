import { useState } from "react";
import Email from "./Email";
import Pw from "./Pw";
import PwCheck from "./PwCheck";
import Name from "./Name";
import Birth from "./Birth";
import Phone from "./Phone";
import axios from "axios";
import { Navigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
    pwCheck: "",
    name: "",
    birth: "",
    phone: "",
  });

  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [birthError, setBirthError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== "") {
      try {
        const { data } = await axios.get("/member/{formData.email}");
        if (data.exists) {
          setEmailError("이미 사용 중인 이메일입니다!");
        } else {
          setEmailError("");
        }
      } catch (error) {
        console.log(error);
      }
    }

    const pwRegExp = /^[a-zA-z0-9]{8,12}$/;
    if (!pwRegExp.test(formData.pw))
      setPwError("숫자 + 영문자 조합으로 8자리~12자리 입력해주세요!");
    else setPwError("");

    if (formData.pw !== formData.pwCheck)
      setPwCheckError("비밀번호가 일치하지 않습니다");
    else setPwCheckError("");

    const birthRegExp = /^[0-9]{6}$/;
    if (!birthRegExp.test(formData.birth))
      setBirthError("생년월일을 6자리의 숫자만 입력해주세요!");
    else setBirthError("");

    await axios
      .post("/member/join", formData)
      .then((response) => {
        console.log(response.data);
        return <Navigate to="/login" replace={true} />;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="join-form" onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <Email handleChange={handleChange} value={formData.email} />
      <p>{emailError}</p>
      <Pw handleChange={handleChange} value={formData.pw} />
      <p>{pwError}</p>
      <PwCheck handleChange={handleChange} value={formData.pwCheck} />
      <p>{pwCheckError}</p>
      <Name handleChange={handleChange} value={formData.name} />
      <Birth handleChange={handleChange} value={formData.birth} />
      <p>{birthError}</p>
      <Phone handleChange={handleChange} value={formData.phone} />
      <button type="submit" className="register" onSubmit={handleSubmit}>
        가입하기
      </button>
    </form>
  );
};

export default RegisterForm;
