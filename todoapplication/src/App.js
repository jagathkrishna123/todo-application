import logo from './logo.svg';
import './App.css';
import Addbook from './components/Addbook';
import Listbook from './components/Listbook';
import { useState } from 'react';

function App() {
  const [uploadTodoStatus,setUploadTodoStatus] = useState({})
  return (
    <div className='d-grid justify-content-center align-items-center'>
      
        <Addbook setUploadTodoStatus={setUploadTodoStatus}/>
        <Listbook uploadTodoStatus={uploadTodoStatus}/>
     
    </div>
  );
}

export default App;
