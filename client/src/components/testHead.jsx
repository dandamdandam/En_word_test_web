import { useEffect, useRef } from "react";

import clock from "../javascripts/timer.js";
import '../styles/testHead.css?after';

/**
 * 테스트 위 시계 컴포넌트
 * 
 * @param {*} NextToTimer 시계 오른쪽의 요소 
 * @returns 
 */
function TestHead({ NextToTimer }){

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
            <NextToTimer></NextToTimer>
        </div>
    );
}

export default TestHead;