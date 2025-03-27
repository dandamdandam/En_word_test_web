import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Loading from '../components/loading';

/**
 * 로그인/회원가입을 하는 페이지
 * @returns 
 */
const SignInNUp = () => {
    const GOOGLE_CLIENT_ID = '1041394807935-sn5sq2ctp44vbb4lh2js46dhhusl8le0.apps.googleusercontent.com';

    const getGoogleAccessToken = () => {
        let url = 'https://accounts.google.com/o/oauth2/v2/auth';
        url += `?client_id=${GOOGLE_CLIENT_ID}`;
        url += `&redirect_uri=${"http://localhost:3000/signin/redirect"}`;
        url += '&response_type=code';
        url += '&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
        
        window.location.assign(url);
    }

    return(
        <div className="signinNUp">
            <button onClick={getGoogleAccessToken}>
                google로 계속하기
            </button>
        </div>
    );
}

/**
 * 구글 로그인 후 리다이렉트하는 링크.
 * @returns 
 */
const GoogleRedirect = () => {
    const [searchParams, ] = useSearchParams();
    const navigator = useNavigate();
    useEffect(() => {
        const code = searchParams.get('code');

        // 회원정보 유무 확인
        axios.get(`auth?code=${code}`)
            .then(res => {
                navigator('/main');
            }).catch(err => {
                alert('알 수 없는 오류입니다. 개발자에게 문의해주세요.\n glue0440@gmail.com');
                navigator('/');
            });
    // eslint-disable-next-line
    }, []);

    return(
        <Loading />
    );
}

export {SignInNUp, GoogleRedirect};