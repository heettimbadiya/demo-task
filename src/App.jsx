import './App.css'
import {Routes,Router,Route} from "react-router-dom";
import SignUpPage from "./pages/sign-up/SignUpPage.jsx";
function App() {

  return (
    <>
            <Routes>
                <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
    </>
  )
}

export default App
