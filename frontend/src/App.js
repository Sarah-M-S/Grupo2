import "./App.css";
import Main from "./components/Main/Main";
import ReportForm from "./components/Main/ReportForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/Main/List";
import Login from "./components/Main/Login";
import Admin from "./components/Admin/Admin";
import ObjectForm from "./components/Admin/ObjectForm";
import Found from "./components/Admin/Found";
import Report from "./components/Admin/Report";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Home from "./pages/home/Home";
import LoginPage from "./pages/loginPage/LoginPage";
import Register from "./pages/register/Register";
import MainPage from "./pages/mainPage/MainPage";
import ReportFormPage from "./pages/reportForm/ReportFormPage";
import Help from "./pages/help/Help";
import EditProfile from "./pages/editProfile/EditProfile";

import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import WhoWeAre from "./pages/home/whoWeAre/WhoWeAre";
import Faq from "./pages/home/faq/Faq";
import Cookies from "./pages/home/cookies/Cookies";

const App = () => {
  return (
    <div className="App">

      <LanguageSwitcher />

      <BrowserRouter>
        <Routes>
          {/* Novas rotas */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/whoWeAre" element={<WhoWeAre />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/cookies" element={<Cookies />}></Route>



          {/* Novas rotas que devem ser protegidas no login */}
          <Route path="/mainPage" element={<MainPage />}></Route>
          <Route path="/reportForm" element={<ReportFormPage />}></Route>
          <Route path="/editProfile" element={<EditProfile />}></Route>



 
          {/* Antigas rotas */}

          {/* <Route path="/" element={<Main />}>
            <Route path="/list" element={<List />}></Route>
            <Route path="report_form" element={<ReportForm />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="objectForm" element={<ObjectForm />}></Route>
            <Route path="found" element={<Found />}></Route>
            <Route path="report" element={<Report />}></Route>
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
