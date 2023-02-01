import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Signin from "./pages/login";
import Details from "./pages/details";
import Add from "./pages/add";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isExpired } from "react-jwt";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/add"
            element={
              isExpired(localStorage.getItem("token")) ? (
                <Navigate replace to="/" />
              ) : (
                <Add />
              )
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
