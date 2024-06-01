import './App.css';
import Main from './components/Main/Main';
import ReportForm from './components/Main/ReportForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/Main/List';
import Login from './components/Main/Login';
import Admin from './components/Admin/Admin';
import ObjectForm from './components/Admin/ObjectForm';
import Found from './components/Admin/Found';
import Report from './components/Admin/Report';
import LanguageSwitcher from './components/LanguageSwitcher';


const App = () => {

  return (
    <div className="App">

        <LanguageSwitcher/>


      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />}>
            <Route path='/list' element={<List />}></Route>
            <Route path='report_form' element={<ReportForm />}></Route>
          </Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}>
            <Route path='objectForm' element={<ObjectForm />}></Route>
            <Route path='found' element={<Found />}></Route>
            <Route path='report' element={<Report />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
