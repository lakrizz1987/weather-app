import  {  useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


import {setAppClassName} from './helpers'
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Search/Search';
import ErrorPage from './Components/ErrorPage/ErrorPage';


function App() {
  const currentTown = useSelector((state: any) => state.town.value);
  const classApp = setAppClassName(currentTown.icon);
  const [isDataLoaded,setIsLoaded] = useState(false);

  return (
    <div className={classApp}>
      <Header />
      <Routes>
        <Route path='/' element={<Home isDataLoaded={isDataLoaded} setIsLoaded={setIsLoaded} />}/>
        <Route path='/search/:name' element={<Search/>}/>
        <Route path='/404' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
