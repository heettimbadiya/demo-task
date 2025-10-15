import './index.css'
import {Routes,Route} from "react-router-dom";
import SignUpPage from "./pages/sign-up/SignUpPage.jsx";
import HomePage from "./pages/home/homePage.jsx";
import AccountPage from "./pages/account/AccountPage.jsx";

function App() {

  return (
    <>
            <Routes>
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/profile" element={<AccountPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
    </>
  )
}

export default App
