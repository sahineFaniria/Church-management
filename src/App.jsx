import React, { useContext, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import {Navigate, Route, Routes, useNavigate,} from 'react-router-dom';
import Home from './Home';
import Dashboard from './components/Dashboard';
import TableAcc from './components/tableau/TableAcc';
import TableEnt from './components/tableau/TableEnt';
import TableSort from './components/tableau/TableSort';
import TableHisto from './components/tableau/TableHisto';
import TablePdf from './components/tableau/TablePdf';
import './App.css';
import ErrorPage from './components/ErrorPage';
import { UserContext } from './components/MyContext';
import DarkMode from './components/Mode/DarkMode';



const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
    navigate('/dashboard')

  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };


  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )

}

const ProtectedRoute = ({children}) => {
  const {token} = useContext(UserContext);
  if(!token){
    return <Navigate to='/home' replace />
  }

  return children;
}


function App() {


  return (
    
    <NextUIProvider>

      
    <AuthProvider>
        <div className=' bg-black'>
            <Routes>
              <Route index element={<Home  />} />
              <Route path='home' element={<Home />} />

              <Route path='dashboard' element={<ProtectedRoute> <Dashboard />  </ProtectedRoute>} >
                <Route index element={<TableAcc/>} />
                <Route path='accieul' element={<TableAcc/>} />
                <Route path='entrant' element={<TableEnt/>} />
                <Route path='sortant' element={<TableSort/>} />
                <Route path='histo' element={<TableHisto/>}/>
                <Route path='pdf' element={<TablePdf/>}/>
                <Route path="*" element={<ErrorPage/>} />
              </Route>

              <Route path='darkmode' element={<DarkMode/>} />
              <Route path="*" element={<ErrorPage/>} />

            </Routes>
          </div>
    </AuthProvider>

    </NextUIProvider>
    
    
  );
};

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });

export default App;
