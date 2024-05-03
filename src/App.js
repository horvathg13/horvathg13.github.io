import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./Header/header";
import React from "react";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Footer from "./Footer/footer";
import {AiFillProject} from "react-icons/ai";
import Projects from "./components/projects";
import ProjectList from "./components/projectList";
import Project from "./components/project";
import Research from "./components/research";
import ContactMe from "./components/contactMe";
import ErrorPage from "./error-page";
import Loader from "./loader";

function App() {
  const Root = ()=>{
    return(
        <>
            <Header/>
            <div id="content">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>

        </>
    )
  }

    const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<AboutMe/>
            },
            {
                path:"projects",
                element:<Projects/>,
                children:[
                    {
                        path:"",
                        element:<ProjectList/>
                    },
                    {
                        path:":projectId",
                        element:<Project/>
                    }
                ]
            },
            {
                path:"research",
                element:<Research/>,
            },
            {
                path:"contact",
                element:<ContactMe/>,
            }
        ]
    },
  ]);

  return (
      <RouterProvider router={router}/>
  );
}
export default App;
