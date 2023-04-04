import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import { FuroProvider, useFuro } from "furo-react";

/*
로그인 여부를 확인하는 컴포넌트로, 로그인이 필요한 페이지를 감싸는데 사용됩니다.
*/
function RequireAuth({ children }) {
  const { isLoading, isAuthenticated, loginWithRedirect } = useFuro();

  useEffect(() => {
    if (isLoading || isAuthenticated) return <>Loading...</>;
    loginWithRedirect();
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return isAuthenticated ? children : <>Loading...</>;
}

function App(props) {
  return (
    <FuroProvider
      domain="https://auth.furo.one"
      /* Furo 콘솔에서 가져온 프로젝트의 client id 입니다. */
      clientId="c9dab65232d24afe9be1eaa8a5702234"
      redirectUri={window.location.origin + "/private"}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/mypage"
            element={
              <RequireAuth>
                <MyPage />
              </RequireAuth>
            }
          />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FuroProvider>
  );
}

export default App;
