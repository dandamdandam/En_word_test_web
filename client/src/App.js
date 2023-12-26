import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import TestSet from './pages/testSetting';
import InputPage from './pages/inputPage';
import TestPage from './pages/testPage';
import { TempIdContext } from './javascripts/tempIdContext';

function App() {

  return (
    <GlobalState>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={"/"} element={<Mapping />}></Route>
          <Route path={"/main"} element={<TestSet />}></Route>
          <Route path={"/input"} element={<InputPage/>}></Route>
          <Route path={"/test"} element={<TestPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

/**
 * 매핑함수
 * TODO 다른 페이지로 넘어가라하는 것을 막을 때등, 페이지 이동을 강제로 연결할 때 쓰기
 */
function Mapping(){
  var nav=useNavigate();
  useEffect(() => {
      nav("/main")
  }, [nav]);
  
  return null;
}

/**
 * 다른 페이지로 이동했을 때 상단으로 스크롤
 * @returns 
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * 전역 상태 관리
 */
function GlobalState({ children }) {

  useEffect(() => {

    return() => {
      alert("");
    }
  },[])

  return (
    <section>
      <TempIdContext.Provider>
        {children}
      </TempIdContext.Provider>
    </section>
  );
}

export default App;
