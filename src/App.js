import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import ForgotPassoword from "./pages/ForgotPassoword";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  );
}

export default App;
