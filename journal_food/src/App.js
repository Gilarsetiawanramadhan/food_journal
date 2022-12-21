import './App.css';
import {getListFood} from './api'
import { useEffect } from 'react';
import SignupForm from './page/register/signup';

function App() {

  useEffect(() => {
    getListFood()
  }, [])

  return (
    <>
      <SignupForm />
    </>
  );
}

export default App;
