import './App.css';
import react from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from '../Dashboard/Dashboard';
import { connect } from 'react-redux';
import Home from '../Home/Home';

import { AppTheme } from '../../Components/Theme/Theme_changer';
import ManagerRepository from '../../../data/repository/manager_repo';
import { copyWith } from '../../../logic/slice';
import Books from '../Books/books';

class App extends react.Component {
  componentDidMount() {
    console.log(this.props.isDarkModeOn, this.props.currentLanguage)
    const settings = new ManagerRepository().loadAppSettings();
    this.props.dispatch(copyWith({
      isDarkModeOn: settings.isDarkModeOn,
      currentLanguage: settings.currentLanguage,
    }))
  }
  render() {
    const Theme = new AppTheme();
    return (
      <div className='App' style={Theme.themeRender(this.props.isDarkModeOn ? Theme.dark : Theme.light)}>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/books' element={<Books/>} />
          <Route path='*' element={<div>Page not found</div>} />
        </Routes>
      </div>
    )
  }
}
const mapStateToProps = storeOf => ({
  currentLanguage: storeOf.spiderlib.currentLanguage.code,
  isDarkModeOn: storeOf.spiderlib.isDarkModeOn,
})
export default connect(mapStateToProps)(App)
