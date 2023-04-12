import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Ajobs from './Components/Ajobs/Ajobs';
import Blog from './Components/Blog/Blog';
import JobDetail from './Components/JobDetail/JobDetail';
import appliedJobLoader from './loaders/appliedJobLoader';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'ajobs',
        element:<Ajobs></Ajobs>,
        loader: appliedJobLoader
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'jobdetails/:id',
        element:<JobDetail></JobDetail>,
        loader: ()=> fetch('../public/Jobs.json')
      },
      {
        path:'*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
