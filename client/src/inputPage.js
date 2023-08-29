import { useRef, useState } from 'react';

import { LoadTable, handle_input, handle_reload } from './javascripts/getWordInput.js';
import Header from './components/header.js';

function InputPage(){
    // inputPage에 표시할 입력된 단어 리스트(json)
    const [words, setwords] = useState([]);
    const input_area = useRef();

    return(
        <div id="inputPage">
            <Header/>
            <article> 
            <div id="how_to">
                <h2>!입력방법!</h2>
                <div id="example">
                    | word 단어
                    | test 시험
                    | book 책,예약하다
                </div>
                <ul> 
                    <li>단어를 영어 + &amp;&amp; + 뜻 형식으로 적어주세요.</li>
                    <li>한 단어의 뜻이 여러 개라면 컴마&#40;,&#41;로 띄어쓰기 없이 구분해서 입력해주세요.<br/>뜻이 여러 개라면 시험을 볼 때 랜덤으로 뜻을 제시하거나 답으로 받습니다.</li>
                    <li>이미 추가된 단어는 밑에 표시 됩니다.</li>
                    <li>입력완료 버튼을 눌러주어야 추가됩니다.</li>
                </ul>
            </div>
            </article>
            <form id="words_input">
                <textarea ref={input_area}></textarea>
                <button type="button" onClick={() => handle_input(input_area, setwords)}>저장</button>
            </form>
            <button id="re_load" type="button" onClick={() => handle_reload(setwords)}>새로고침</button>
            <LoadTable words={words} setwords={setwords}/>
        </div>
    )
}

export default InputPage;