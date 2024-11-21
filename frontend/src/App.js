import "./App.css";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

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
import AddFoundForm from "./pages/addFound/AddFoundForm";
import { useAuthContext } from "./hooks/useAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import OpenRoute from "./components/OpenRoute";
import AdminRoute from "./components/AdminRoute";
import AddLocalAndDependencie from "./pages/addLocalAndDependencie/AddLocalAndDependencie";
import EditItem from "./pages/editItem/EditItem";
import { SearchContext } from "./context/SearchContext";

const App = () => {
  const { authIsReady, user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="App">
      <LanguageSwitcher />

        {authIsReady && (
          <Routes>
            {/* Novas rotas */}

            <Route path="/help" element={<Help />}></Route>
            <Route path="/whoWeAre" element={<WhoWeAre />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/cookies" element={<Cookies />}></Route>


            <Route path="/" element={<OpenRoute><Home /></OpenRoute>}></Route>
            <Route path="/loginPage" element={<OpenRoute><LoginPage /></OpenRoute>}></Route>
            <Route path="/register" element={<OpenRoute><Register /></OpenRoute>}></Route>
            <Route path="/forgotPassword" element={<OpenRoute><ForgotPassword /></OpenRoute>}></Route>
            

            {/* Novas rotas que devem ser protegidas no login */}
            <Route path="/mainPage" element={<ProtectedRoute><MainPage /></ProtectedRoute>}></Route>
            <Route path="/reportForm" element={<ProtectedRoute><ReportFormPage /></ProtectedRoute>}></Route>
            <Route path="/editProfile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>}></Route>
            <Route path="/addFound" element={<AdminRoute><ProtectedRoute><AddFoundForm /></ProtectedRoute></AdminRoute>}></Route>
            <Route path="/editItem" element={<AdminRoute><ProtectedRoute><EditItem /></ProtectedRoute></AdminRoute>}></Route>
            <Route path="/addLocalAndDependencie" element={<AdminRoute><ProtectedRoute><AddLocalAndDependencie /></ProtectedRoute></AdminRoute>}></Route>

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
        )}

    </div>
  );
};

export default App;
