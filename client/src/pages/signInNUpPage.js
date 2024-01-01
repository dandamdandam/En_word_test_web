import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * 로그인/회원가입을 하는 페이지
 * @returns 
 */
const SignInNUp = () => {
    const GOOGLE_CLIENT_ID = '1041394807935-sn5sq2ctp44vbb4lh2js46dhhusl8le0.apps.googleusercontent.com';

    const signinReq = () => {
        let url = 'https://accounts.google.com/o/oauth2/v2/auth';
        url += `?client_id=${GOOGLE_CLIENT_ID}`;
        url += `&redirect_uri=${"http://localhost:3000/signin/redirect"}`;
        url += '&response_type=code';
        url += '&scope=email profile';
        
        window.location.assign(url);
    }

    return(
        <div className="signin">
            <button onClick={signinReq}>
                로그인!!
            </button>
        </div>
    );
}

/**
 * 구글 로그인 후 리다이렉트하는 링크.
 * @returns 
 */
const SignInRedirect = () => {
    const [searchParams, ] = useSearchParams();
    const navigater = useNavigate();
    useEffect(() => {
        const code = searchParams.get('code');

        // 회원정보 유무 확인
        axios.get(`/login?code=${code}`)
            .then(res => {
                navigater('/main');
            }).catch(err => {
                if(err.response && err.response.status===401){
                    alert('로그인 정보가 없습니다. 회원가입을 먼저 진행해주세요.');
                    navigator('/');
                } else{
                    console.log(err);
                }
            });
    // eslint-disable-next-line
    }, []);

    return(
        <div></div>
    );
}

export {SignInNUp, SignInRedirect};