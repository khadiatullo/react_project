import React, { useEffect, useState } from 'react';
import './styles/App.css'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }

    setIsLoading(false)
  })

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading}}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div id='root'>
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )

}

export default App;
