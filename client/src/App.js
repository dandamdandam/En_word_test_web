import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import TestSet from './testSetting';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <ScrollToTop/>
        <Routes>
          <Route path={"/"} element={<TestSet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
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
