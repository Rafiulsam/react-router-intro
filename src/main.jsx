import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ErrorPage from './error-page.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import First from './Components/First/First.jsx'
import Friends from './Components/Friends/Friends.jsx'
import FriendDetails from './Components/FriendDetails/FriendDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:"/posts",
        element:<Posts></Posts>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'/post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)