import './index.css'
import {Routes,Route} from "react-router-dom";
import SignUpPage from "./pages/sign-up/SignUpPage.jsx";
import Header from "./components/global/Header.jsx";
import AccountUI from "./components/profile/Account.jsx";
import Footer from "./components/global/Footer.jsx";
import HomePage from "./pages/home/homePage.jsx";

function App() {

  return (
    <>
                <Header />
            <Routes>
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/profile" element={<AccountUI />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        <Footer/>
    </>
  )
}

export default App
