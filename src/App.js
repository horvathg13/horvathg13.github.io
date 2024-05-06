import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./Header/header";
import React, {useCallback, useEffect, useMemo, useState} from "react";
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
import Cookies from "universal-cookie";
import FloatingBanner from "./components/FloatingBanner";

function App() {
    const [decisionMade, setDecisionMade] = useState(true) // start with true to avoid flashing
    const cookies = useMemo(() => new Cookies(), []);

    function gtag() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
    }

    const sendConsent = useCallback((consent) => {
        localStorage.setItem("consent", JSON.stringify(consent))
        gtag('consent', 'default', consent);
        gtag('js', new Date())
        gtag('config', 'G-X8WM43FSKH')

    }, []);

    useEffect(() => {
        if (cookies.get("COOKIE_NAME") !== undefined) {
            setDecisionMade(true)
            if(localStorage.getItem("consent")){
                sendConsent(JSON.parse(localStorage.getItem("consent")))
            }
        } else {
            setDecisionMade(false)
        }
    }, [cookies, setDecisionMade, sendConsent])

    const handleDecision = (outcome) => {
        const consent = {
            'ad_storage': outcome,
            'analytics_storage': outcome,
            'ad_user_data': outcome,
            'ad_personalization': outcome,
        }

        cookies.set("COOKIE_NAME", consent, {
            expires: new Date(new Date().setMinutes(new Date().getMinutes() + 60)),
            path: "/"
        })

        sendConsent(consent)
        setDecisionMade(true)
    }
  const Root = ()=>{
    return(
        <>
            <Header/>
            <div id="content">
                <Outlet/>
            </div>
            { decisionMade ? (
                <></>
            ) : (
                <FloatingBanner
                    onAccept={
                        () => {
                            handleDecision("granted")
                        }
                    }
                    onDeny={
                        () => {
                            handleDecision("denied")
                        }
                    } />
            )
            }
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
