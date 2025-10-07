import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfo } from './Components/Github/Github.jsx'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       }, 
//       {
//        path: 'About',
//        element: <About/> 
//       },

//       {
//         path: 'Contact-Us',
//         element: <ContactUs/>,
//       }
     
//     ],

//   },


// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path ='' element = {<Home/>}/>
      <Route path ='About' element = {<About/>}/>
      <Route path ='Contact-Us' element = {<ContactUs/>}/>
      <Route path = 'user/:userid' element = {<User/>}/>
      <Route loader = {githubInfo} path = 'Github' element = {<Github/>}/>

    </Route>

  )
)


export default router;