import { Routes, Route } from 'react-router-dom';
import './App.css';
import StudentManager from './components/Main/StudentManager';
import Menu from './components/Menu/Menu';
import SearchTab from './components/Main/SearchTab';
import CreateStudent from './components/Main/CreateStudent';

function App() {
  return (
    <>
      <div className="container rounded border border-secondary py-3 pe-5">
        <div className='row'>
          <div className='col-md-3'>
            <Menu />
          </div>
          <div className='col-md-9 rounded border border-success'>
            <Routes>
              <Route path='/fs-react' element={<StudentManager />}></Route>
              <Route path='/fs-react/student-manager' element={<StudentManager />}></Route>
              <Route path='/fs-react/create-student' element={<CreateStudent />}></Route>
              <Route path='/fs-react/search-tab' element={<SearchTab />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
