import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
function App() {
  
  return (
     
      
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
     
   
  
  );

}

export default App;
