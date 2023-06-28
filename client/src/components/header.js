import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1>영어단어시험사이트</h1>
            <nav>
                <ul className="list-group list-group-horizontal">
                    <li className='list-group-item'><Link className="link" to="/">테스트</Link></li>
                    <li className='list-group-item'>단어입력</li>
                    <li className='list-group-item'>시험기록</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;