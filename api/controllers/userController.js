const axios = require('axios');

const userModel = require("../models/userModel").userModel;
const config = process.env.NODE_ENV =='production' ? require('../public/javascripts/config/prod') : require('../public/javascripts/config/dev');

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/auth/userinfo.email';
const GOOGLE_CLIENT_ID = '1041394807935-sn5sq2ctp44vbb4lh2js46dhhusl8le0.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = config.googleClientSecret;

/**
 * private
 * 이메일 중복확인
 * 
 * @param email:String
 * @returns 성공여부:boolean
 */
const isEmailUnique = (email) => {
    userModel.findOne({userEmail: email}).than(function(re){
        if(re){
            // 겹치는 이메일 존재
            return false
        } else{
            return true
        }
    }).catch((err) => {
        console.error(err);
    });
}
/**
 * private
 * 회원가입(데이터베이스에 회원정보 등록)
 */
const signUp = (email) => {
    var user = new userModel();
    try{
        user.userEmail = email;
        user.save();
        console.log('>> userController > signUp result(isEmailUnique?): ' + isEmailUnique(email));      // DEBUG
    } catch(err){
        console.error(err);
    }
}
/**
 * 로그인
 * @param {*} req 
 * @returns 성공여부
 */
exports.signIn = async (req) => {
    const code = req.query.code;
    try{
        // (google OAuth) access_token, refresh_token 등의 구글 토큰 정보 가져오기
        const googleTokenRes = await axios.post(GOOGLE_TOKEN_URL, {
            // x-www-form-urlencoded(body)
            code,
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            redirect_uri: 'http://localhost:3000/signin/redirect',
            grant_type: 'authorization_code',
        });
        console.log(">>>>>> get accessToken success" + googleTokenRes.data.access_token);
        // (google OAuth) 받아온 토큰을 이용해 회원정보 받아오기
        const userInfoRes = await axios.get(GOOGLE_USERINFO_URL, {
            headers: {
                Authorization: `Bearer ${googleTokenRes.data.access_token}`,
            },
        });
        console.log('>> userController > email: ' + userInfoRes.data + "\n>>>>>>>> "+ userInfoRes);        // DEBUG
        // 회원정보가 없을 경우
        if(isEmailUnique(userInfoRes.data.email)){
            signUp(userInfoRes.data.email);
        }
        return true;
    } catch(err){
        console.error(err);
        return false;
    }
}