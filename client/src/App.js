import './App.scss';
import React, { useCallback, useContext, useState } from 'react'
import Header from './components/homepages/Header'
import Navbar from './components/homepages/Navbar'
import About from './components/homepages/About'
import Education from './components/homepages/Education'
import Projects from './components/homepages/Projects'
import Experience from './components/homepages/Experience'
import Contact from './components/homepages/Contact'
import Footer from './components/homepages/Footer'
import Login from './components/homepages/Login'
import Register from './components/homepages/Register'

import Admin from './components/adminComponents/Admin'

import EditAbout from './components/editComponents/EditAbout'
import EditEducation from './components/editComponents/EditEducation'
import EditProjects from './components/editComponents/EditProjects'
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
      <Element className='Education'>
        <Route exact path='/' component={Education} />
      </Element>
      <Element className='Projects'>
        <Route exact path='/' component={Projects} />
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
      <Route exact path='/editEducation/:id' component={EditEducation} />
      <Route exact path='/editProject/:id' component={EditProjects} />
      <Route exact path='/editExperience/:id' component={EditExperience} />
      <Route exact path='/editAbout/:id' component={EditAbout} />


      {/* <Route component={Footer} /> */}
    </div>
  );
}

export default App;
