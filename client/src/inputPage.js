import { useRef, useState } from 'react';

import { LoadTable, handle_input, handle_reload } from './javascripts/getWordInput.js';
import Header from './components/header.js';
import './inputPage.css?after';

function InputPage(){
    // inputPage에 표시할 입력된 단어 리스트(json)
    const [words, setwords] = useState([]);
    const input_area = useRef();

    return(
        <div id="inputPage">
            <Header/>
            <div className="padding_all">
                <div className="grid-container">
                    <article> 
                    <div id="how_to">
                        <h2>!입력방법!</h2>
                        <div id="example">
                            <span>word&&단어</span>
                            <span>test&&시험</span>
                            <span>in -ing&&~함으로써</span>
                            <span>afford&&여유가 되다,제공하다</span>
                        </div>
                        <small>예시문↑</small>
                        <ul> 
                            <li>단어를 <span className='marker'>영어 + &amp;&amp; + 뜻 형식</span>으로 적어주세요.</li>
                            <li>한 단어의 <span className='marker'>뜻이 여러 개라면 컴마&#40;,&#41;로 띄어쓰기 없이 구분해서</span> 입력해주세요.<br/>뜻이 여러 개라면 시험을 볼 때 랜덤으로 뜻을 제시하거나 답으로 받습니다.</li>
                            <li>이미 추가된 단어는 밑에 표시 됩니다.</li>
                            <li>입력완료 버튼을 눌러주어야 추가됩니다.</li>
                        </ul>
                    </div>
                    </article>
                    <form id="words_input">
                        <textarea ref={input_area}></textarea>
                        <button type="button" onClick={() => handle_input(input_area, setwords)}>입력완료</button>
                    </form>
                </div>
                <button id="re_load" type="button" onClick={() => handle_reload(setwords)}>새로고침</button>
                <LoadTable words={words} setwords={setwords}/>
            </div>
        </div>
    )
}

export default InputPage;