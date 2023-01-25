import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import ForgotPassoword from "./pages/ForgotPassoword";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";
function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="forgot-Passoword" element={<ForgotPassoword />}/>
        <Route path="Offers" element={<Offers />}/>
        <Route path="Signup" element={<Signup />}/>
        <Route path="Signin" element={<Signin />}/>
      </Routes>

    </Router>
    </>
  );
}

export default App;
