import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

/**
 * https://github.com/realKamja/POTATOS_market/blob/cf2433f2cd7f731798327e68837c43788313b559/frontend/src/pages/signUp.js
 * 전에 만들었던것 그대로 가져옴
 * 회원가입 페이지
 * @returns 
 */
function SingUp(){

    // 로그인 페이지 라우팅
    var navigator=useNavigate();
    var routerLogin=() => {
        navigator("/login")
    };

    /**
     * POST 회원가입 작성지
     * /user/signin (post)
     * 
     * userId: 아이디
     * userPassword: 비밀번호
     * userName: 이름
     * userEmail: 이메일 
     */
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/user/signin', {
              userId: userId,
              userPassword: userPassword,
              userName: userName,
              userEmail: userEmail
            });
      
            alert('회원가입 절차가 끝났습니다! 입력한 아이디/비밀번호로 로그인해주세요.');
            routerLogin();

          } catch (error) {
            console.error('Error:', error);
          }    
    }

    return(
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <p>
                    로그인 할 때 이용할 아이디와 비밀번호를 정해 입력해주세요.
                    <br/> 접속하는 매 회 입력해야 하므로, 기억하기 쉬워야 합니다.
                    <br/>타인의 접근을 막기 위해, 예측하기 어려운 비밀번호를 사용해주세요.
                </p>
                <label for="userId">아이디: </label>
                <input
                    type="text"
                    name="userId"
                    id="userId"
                    pattern="[a-z0-9]{5,19}"
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <span class="validity"></span>
                <small class="validValueEx">영어소문자와 숫자만 입력할 수 있습니다. 5글자 이상, 19글자 이하여야 합니다. ex) gildong111</small>

                <label for="userPassword">비밀번호: </label>
                <input
                    type="password"
                    name="userPassword"
                    id="userPassword"
                    pattern="[a-zA-Z0-9]{8,16}"
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                />
                <span class="validity"></span>
                <small class="validValueEx">영어대소문자와 숫자만 입력할 수 있습니다. 8글자 이상, 16글자 이하여야 합니다.</small>

                <p>
                    고객님의 개인정보(성함, 전화번호, 이메일)를 적어주세요.
                </p>
                <label for="userName">이름(성함): </label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />

                <label for="userEmail">이메일: </label>
                <input
                    id="userEmail"
                    type="text"
                    name="userEmail"
                    pattern="[0-9a-zA-Z]*[@][0-9a-zA-Z]+[.][a-zA-Z]{2,3}"
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                />
                <span class="validity"></span>
                <small class="validValueEx">이메일아이디@이메일주소의 형태로 적어주세요. ex) gildong111@gmail.com</small>

                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default SingUp