import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import AddStudents from './components/AddStudents';

function App() {
  return (
    <div className="App">
  <Navigation/>
  <Routes>
    <Route path='/' element={<View/>} />
    <Route path='/add' element={<AddStudents
    data={{id: '', name: '', grade: '' }}
    method="post"/>}/>
  </Routes>
    
    </div>
  );
}

export default App;
