import './App.css';
import Main from './components/Main/Main';
import ReportForm from './components/Main/ReportForm'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import List from './components/Main/List';
import Login from './components/Main/Login';
import Admin from './components/Admin/Admin';
import ObjectForm from './components/Admin/ObjectForm';
import Found from './components/Admin/Found';
import Report from './components/Admin/Report';

const App = () => {

  //Objetos criados para exibição apenas enquanto nao há conteúdo dinâmico
  const foundObjects = [
    { name: 'Chave', local: 'Sala de estar', data: '10/05/2024' },
    { name: 'Óculos', local: 'Cozinha', data: '12/05/2024' }
  ]

  const incomeReports = [
    { name: 'Pelé', object: 'carro zero quilometro', local: 'Maracanã', data: '10/05/2024' },
    { name: 'Elias', object: 'ouro que vale mais que dinheiro',local: 'Jamaica', data: '12/05/2024' }
  ]

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />}>
            <Route path='/list' element={<List />}></Route>
            <Route path='report_form' element={<ReportForm />}></Route>
          </Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}>
            <Route path='add_object' element={<ObjectForm />}></Route>
            <Route path='found' element={<Found objects={foundObjects}/>}></Route>
            <Route path='report' element={<Report reports={incomeReports}/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
