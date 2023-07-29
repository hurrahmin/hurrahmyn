import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import Wrapper from "./styles";

export default function Login() {
  const [useremail, setUseremail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [warning, setWarning] = React.useState("");
  const [passwordwarning, setPasswordWarning] = React.useState("");

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[a-zA-z0-9]{8,20}$/;

  const emailCheck = (username) => {
    const isValidEmail = emailRegEx.test(username);
    if (!isValidEmail) {
      setWarning('이메일 형식을 확인해주세요.');
    } else {
      setWarning('');
    }
    return isValidEmail;
  };

  const passwordCheck = (password) => {
    if(password.match(passwordRegEx)===null) {
      setPasswordWarning('비밀번호 형식이 일치하지 않습니다.');
      return;
    } else {
      setPasswordWarning('');
    }
  }

  return (
    <Wrapper>
      <div className="login">
        <div className="login-signup-buttons">
          <h3 className='activated'>로그인</h3>
          <Link to="/signup" style={{ textDecoration: "none", color: "gray"  }} > 
            <h3>회원가입</h3>
          </Link>
        </div>

        <form>
          <div>
            <InputGroup style={{height: '45px'}}>
              <Form.Control
                placeholder="이메일"
                aria-label="useremail"
                style={{ backgroundColor: "#E6E6E6" }}
                onChange={(e) => {
                  setUseremail(e.target.value);
                  emailCheck(e.target.value);
                }}
              />
            </InputGroup>
            <span className='warningmsg'>{warning}</span>
          </div>

          <div>
            <InputGroup style={{height: '45px'}}>
              <Form.Control
                placeholder="비밀번호"
                aria-label="password"
                style={{ backgroundColor: "#E6E6E6" }}
                onChange={(e)=>{setPassword(e.target.value); 
                  passwordCheck(e.target.value)}} 
              />
            </InputGroup>
            <span className='warningmsg'>{passwordwarning}</span>

          </div>

          <button type="submit" className='start'>시작하기</button>

          <p className="forgot-password"> <a href="/forgot-password">비밀번호 찾기</a></p>
        </form>
      </div>
    </Wrapper>
  );
}
