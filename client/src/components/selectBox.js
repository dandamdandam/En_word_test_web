/**
 * 선택상자를 반복해서 만들어주는 컴포넌트
 * name -> select의 이름
 * st -> 반복 시작
 * end -> 반복 끝(exclusive)
 * step -> 반복 중 스텝
 * suffix -> 선택상자에 표시되는 수의 뒤에 붙을 단위
 * @param {*} param0 
 * @returns 
 */
export default function SelectBox({name, st, end, step, suffix}){
    function repeatOp(){
        let arr=[]
        var key_num=0
        for(var i=st; i<end; i+=step){
            arr.push(
                <option key={key_num} value={i}>{i}{suffix}</option>
            );
            key_num++;
        }
        return arr
    }

    return(
        <select name={name}>
            <option value="none" selected={true} disabled={true} hidden={true}>{name}</option>
            {repeatOp()}
        </select>
    )
}