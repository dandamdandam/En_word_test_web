/**
 * inputPage에서 사용.
 * 사용자에게서 단어입력을 받는 기능묶음
 * 
 * 컴포넌트
 * LoadTable(setwords)
 * 함수
 * load(setwords), write(word, meanings), del(id, setwords)
 * handle_input(input_area, setwords), handle_reload(setwords)
 */
import {useEffect} from 'react';
import axios from 'axios'

var load=null;
var write=null;
var del=null;

var handle_input=null;
var handle_reload=null;

/**
 * 입력받은 단어를 표시하는 테이블 컴포넌트
 * @param {*} param0 
 * @returns 
 */
function LoadTable({words, setwords}) {
    useEffect(() => {
        load(setwords);
    }, [setwords])
    return(
        <table id="print_words">
            <thead>
                <tr> 
                <th>단어</th>
                <th>뜻</th>
                <th>삭제하기</th>
                </tr>
            </thead>
            <tbody id="add_here">
            {
                words.map(function(i){
                    return (
                        <tr key={i._id}> 
                            <td>{i.word}</td> 
                            <td>{i.meanings}</td> 
                            <td><button className='delete_data_bu' onClick={() => del(i._id, setwords)}>삭제</button></td> 
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )

}

/**
 * 데이터를 서버에서 받아오는 함수.
 * useState에 저장.
 * 
 * @param setwords useState set 함수. 
 */
load = async (setwords) => {
    try{
        var res = await axios.get('http://localhost:9000/load');
        setwords(res.data);
    } catch(error){
        console.log(error);
    }
}

/**
 * 단어 한개를 서버에 저장하는 함수.
 * 
 * @param word 단어 스펠링
 * @param meanings 단어 뜻 리스트
 * @param setwords load 함수에 넘어갈 단어 저장용 state set 함수.
 */
write = (word, meanings, setwords) => {
    const postdata={
        'word': word,
        'meanings': meanings
    };
    
    axios.post('http://localhost:9000/write', postdata, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        load(setwords);
    })
    .catch(error => {
        console.error('There was a problem with the request:', error);
    });
    
}

/**
 * 서버에 주어진 인덱스에 해당되는 단어 삭제 요청
 * 
 * @param id 저장된 단어의 인덱스
 * @param setwords load함수에 넘겨줄 단어저장용 state set함수
 */
del = (id, setwords) => {
    const postdata={
        '_id':id
    };

    axios.post('http://localhost:9000/del', postdata, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        console.log(response.data);
        load(setwords);
    })
    .catch(error => {
        console.error('There was a problem with the request:', error);
    });
}

/**
 * 단어 저장 요청 처리 함수.
 * 
 * @param input_area 단어가 입력된 input태그의 ref.
 * @param setwords write 함수에 넘어갈 단어 저장용 state set 함수.
 */
handle_input = (input_area, setwords) => {
    var contents=input_area.current.value.split(/r?\n/);
    input_area.current.value = ""
    var wrong_form="";
    for (var i=0; i<contents.length; i++) {
        var content=contents[i].split('&&');
        if(content.length!==2){
            wrong_form+=contents[i]+'\n';
            alert(wrong_form+'은 잘못된 형식의 입력입니다.');
        }
        else{
            write(content[0], content[1].split(","), setwords);
        }
    }
}

/**
 * 새로고침 함수
 * 
 * @param setwords load 함수에 넘어갈 단어 저장용 state set 함수.
 */
handle_reload = (setwords) => {
    load(setwords);
}

export {LoadTable, handle_input, handle_reload};