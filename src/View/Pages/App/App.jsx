import './App.css';
import react from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default class App extends react.Component{
  render (){
    return(
      <div className='App'>
        <Sidebar/>
        <Routes>
            <Route index element = {<Dashboard/>}></Route>
            <Route path='*' element = {<div>Page not found</div>}/>
        </Routes>
      </div>
    )
  }
}
