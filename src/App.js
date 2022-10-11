import Header from "./components/Header/Header";


import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/SignUp";

import Invite from "./pages/Account/Invite"
import Dashboard from "./pages/Account/Dashboard";
import NewLeader from "./pages/Account/NewLeader";
import Earnings from  "./pages/Account/Earnings";
import Leaders from "./pages/Account/Leaders";

import { BrowserRouter as Router, Switch, Routes ,Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <AuthProvider>
          <Header />
         
          <main
            id="page-wrap"
            className="h-full min-h-[20rem]  m-w-[1024px] mx-auto"
          >
            {/* <Link to="/"> home</Link> <Link to="/about"> About</Link> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact_us" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Account Links */}
              <Route path="/Invite" element={<Invite />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Leaders" element={<Leaders />} />
              <Route path="/NewLeader" element={<NewLeader />} />
              <Route path="/Earnings" element={<Earnings />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
