import './App.css';
import react from 'react';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
// import Sidebar from '../../Components/Sidebar/Sidebar';
import Home from '../Home/Home';
import store from '../../../logic/store';

export default class App extends react.Component {
  render() {
    return (
      <div className='App'>
        {/* <Sidebar/> */}
        <Provider store={store}>

          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<div>Page not found</div>} />
          </Routes>
        </Provider>
      </div>
    )
  }
}
