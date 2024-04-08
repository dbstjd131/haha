import React from "react";
import '../style/Login.css';
import { chart, id, pas } from '../asset/img/index';

const Login = () => {
    return (
        <div className="loginpage">
            <div className="chartpic">
                <img className='chart' alt='chart' src={chart} />
            </div>

            <div className="login">
                <div className="toplogin">
                    <div className="loginword">
                        Login
                    </div>
                    <div className="Word">
                        사용하기 쉽고 편리한 chart를 이용해보세요.
                    </div>
                </div>

                <div className="Id">
                    <div className="id1">
                        <img className='id' alt='id' src={id} /> <input type="IDD" placeholder="ID"></input>
                    </div>
                    <div className="pasword">
                        <img className='pas' alt='pas' src={pas} /> <input type="IDD" placeholder="Password"></input>
                    </div>
                </div>
                <div className="logbut">
                    로그인
                </div>
                <div className="botlog">
                    <div className="www">
                    아이디 찾기 | 비밀번호 찾기 | 회원가입하기
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;