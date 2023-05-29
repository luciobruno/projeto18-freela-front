import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthorizationProvider } from "./context/AuthorizationContext";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import AddPost from "./pages/AddPost";
import SearchUser from "./pages/SearchUser";

function App() {
  return (
    <>
      <Top>Fomebook</Top>
      <AuthorizationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/addPost" element={<AddPost />} />
            <Route path="/search" element={<SearchUser></SearchUser>} />
          </Routes>
        </BrowserRouter>
      </AuthorizationProvider>
    </>
  );
}

export default App;

const Top = styled.div`
    display: flex;
    height: 60px;
    width: 100vw;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border: 1px solid black;
`