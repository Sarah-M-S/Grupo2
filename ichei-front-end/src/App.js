import './App.css';
import Main from './components/Main/Main';
import ReportForm from './components/Main/ReportForm'
import Login from './components/Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import List from './components/Main/List';

const App = () => {
  const foundObjects = [
    { name: 'Chave', local: 'Sala de estar', data: '10/05/2024' },
    { name: 'Óculos', local: 'Cozinha', data: '12/05/2024' }
  ]

  return (
    <div className="App">
    
    <BrowserRouter>

      <nav>
        <Link to="/list"> Página Inicial </Link>
        <Link to="/login"> Login </Link>
      </nav>


  
        <Routes>
        
          <Route path='/' element={<Main />}>
            <Route path='/list' element={<List objects={foundObjects} />}></Route>
            <Route path='report_form' element={<ReportForm />}></Route>
          </Route>

          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
