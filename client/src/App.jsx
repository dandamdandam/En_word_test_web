import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import TestSet from "./pages/testSetting";
import InputPage from "./pages/inputPage";
import TestPage from "./pages/testPage";
import { SignInNUp, GoogleRedirect } from "./pages/signInNUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestSet />,
  },
  {
    path: "/signup",
    element: <SignInNUp />,
  },
  {
    path: "/signup/redirect",
    element: <GoogleRedirect />,
  },
  {
    path: "/input",
    element: <InputPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
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
