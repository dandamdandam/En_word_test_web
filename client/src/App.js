import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";

import TestSet from './pages/testSetting';
import InputPage from './pages/inputPage';
import TestPage from './pages/testPage';
import { SignInNUp, SignInRedirect } from './pages/signInNUpPage';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={"/"} element={<SignInNUp />}></Route>
        <Route path={"/main"} element={<TestSet />}></Route>
        <Route path={"/input"} element={<InputPage/>}></Route>
        <Route path={"/test"} element={<TestPage/>}></Route>
        <Route path={"/signin/redirect"} element={<SignInRedirect />}></Route>
      </Routes>
    </BrowserRouter>
  );
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

export default App;
