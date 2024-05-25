import './App.css';
import Main from './components/Main';
import Add_Object from './components/Add_Object';
import Report_Form from './components/Report_Form'
import Found from './components/Found';
import Login from './components/Login';
import Report from './components/Report'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  const foundObjects = [
    { name: 'Chave', local: 'Sala de estar', data: '10/05/2024' },
    { name: 'Óculos', local: 'Cozinha', data: '12/05/2024' }
  ]

  return (
    <div className="App">
      <h1>TESTE</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/report_form">Reportar Perda</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Routes>
          <Route path='/' element={<Main objects={foundObjects}/>}></Route>
          <Route path='/report_form' element={<Report_Form/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
