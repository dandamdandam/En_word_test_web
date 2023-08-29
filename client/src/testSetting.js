import { useEffect, useRef } from "react";

import Header from "./components/header";
import SelectBox from "./components/selectBox";
import clock from "./javascripts/timer.js";
import './style.css';

function TestSet(){
    return(
        <div id="testSetting">
            <Header/>
            <TestHead/>
            <article>
                <div className="index-par">
                    <h2>시험을 시작하기 전!</h2>
                    <ol> 
                        <li>단어입력 창에서 단어들을 입력하고 제출합니다. </li>
                        <li>시험을 위한 시간, 문제수, 방식, 답입력시간을 정해줍니다.
                        <ul> 
                            <li>시간: 시험에 주어지는 제한시간</li>
                            <li>문제수: 답을 적어야 하는 문제 수</li>
                            <li>시험방식: 주어지는 것⇒적어야 하는 답 식으로 선택 가능.<br/>ex&#41; 스펠링⇒의미 'word'가 주어지고 학생은 '단어'를 적어야 합니다.</li>
                            <li>답입력시간: 아래 시험방법에 적혀 있는 'check버튼'을 누르지 않을 수 있는 시간.</li>
                        </ul>
                        </li>
                        <li>모두 정한 후에는 START 버튼을 눌러줍니다.</li>
                    </ol>
                </div>
                <div className="index-par">
                    <h2>시험 전 시험방법 숙지!</h2>
                    <ul> 
                        <li>답을 입력하는 시간을 제외하고는 check가 써있는 사각버튼에 마우스를 올려두어야&#40;스마트폰의 경우 누르고 있어야&#41; 합니다.</li>
                        <li>check를 누르지 않은 상태가 답입력시간에서 정한 시간이 지나면 시험이 취소됩니다&#40;다른 사이트에 접속하는 것을 막기 위해서 입니다&#41;.</li>
                        <li>단어입력단계에서 입력한 단어의 의미가 여러개일 경우, 하나만 써야 답으로 인정됩니다.</li>
                        <li>불필요한 띄어쓰기는 채점에 혼동을 줄 수 있으니 주의해주세요.</li>
                    </ul>
                </div>
            </article>
        </div>
    );
}

function TestHead(){

    const hour_ref=useRef();
    const minute_ref=useRef();
    const second_ref=useRef();

    useEffect(() => {
        var interval = setInterval(function(){clock(hour_ref, minute_ref, second_ref)}, 1000); // 1000 = 1s
        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
        <div id="test_head">
            <img id="timer" src="images/timer.png" alt="타이머이미지" width="600"/>
            <div id="clock__hour" ref={hour_ref}> </div>
            <div id="clock__minutes" ref={minute_ref} ></div>
            <div id="clock__seconds" ref={second_ref} ></div>
            <form id="set"> 
                <SelectBox name="시간" st={10} end={61} step={10} suffix="m"/>
                <SelectBox name="문제수" st={10} end={101} step={10} suffix="개"/>
                <select name="시험방식">
                    <option value="none" selected="selected" disabled="disabled" hidden="hidden">시험방식</option>
                    <option value="sp_m">스펠링⇒의미</option>
                    <option value="m_sp">의미⇒스펠링</option>
                    <option value="so_sp">소리⇒스펠링</option>
                    <option value="so_m">소리⇒의미</option>
                    <option value="so_sp,m">소리⇒스펠링&amp;의미</option>
                </select>
                <SelectBox name="답입력시간" st={10} end={61} step={10} suffix="s"/>
                <button className="btn" type="submit">START</button>
            </form>
        </div>
    );
}

export default TestSet;