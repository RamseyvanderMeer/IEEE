import './App.scss';
import React, { useCallback, useContext, useState } from 'react'
import Header from './components/homepages/Header'
import Navbar from './components/homepages/Navbar'
import About from './components/homepages/About'
import Social from './components/homepages/Social'
import Technicals from './components/homepages/Technicals'
import Experience from './components/homepages/Experience'
import Contact from './components/homepages/Contact'
import Footer from './components/homepages/Footer'
import Login from './components/homepages/Login'
import Register from './components/homepages/Register'

import Admin from './components/adminComponents/Admin'

import EditAbout from './components/editComponents/EditAbout'
import EditSocial from './components/editComponents/EditSocial'
import EditTechnicals from './components/editComponents/EditTechnicals'
import EditExperience from './components/editComponents/EditExperience'

import { Route } from 'react-router-dom'
import { Element } from 'react-scroll'
import { DataContext } from './components/Context/GlobalContext'


function App() {

  const state = useContext(DataContext)
  const [isLogin, setIsLogin] = state.isLogin


  return (
    <div className="App">
      <Navbar />
      {/* <Element className='Home'>
        <Route exact path='/' component={Header} />
      </Element> */}
      <Element className='About'>
        <Route exact path='/' component={About} />
      </Element>
      <Element className='Social'>
        <Route exact path='/' component={Social} />
      </Element>
      <Element className='Technicals'>
        <Route exact path='/' component={Technicals} />
      </Element>
      {/* <Element className='Experience'>
        <Route exact path='/' component={Experience} />
      </Element> */}
      <Element className='Contact'>
        <Route exact path='/' component={Contact} />
      </Element>


      <Route exact path='/login' render={() => isLogin ? <Admin /> : <Login setIsLogin={setIsLogin} />} />
      <Route exact path='/register' render={() => isLogin ? '' : <Register />} />
      <Route exact path='/admin' {...console.log(isLogin)} render={() => isLogin ? <Admin /> : <Login />} />
      <Route exact path='/editSocial/:id' component={EditSocial} />
      <Route exact path='/editTechnical/:id' component={EditTechnicals} />
      <Route exact path='/editExperience/:id' component={EditExperience} />
      <Route exact path='/editAbout/:id' component={EditAbout} />


      {/* <Route component={Footer} /> */}
    </div>
  );
}

export default App;
