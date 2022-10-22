import { createBrowserRouter } from "react-router-dom";
import AllNews from "../components/AllNews";
import ErrorPage from "../components/ErrorPage";
import FullNews from "../components/FullNews";
import Login from "../components/Login";
import News from "../components/News";
import SignUp from "../components/SignUp";
import UpdateProfile from "../components/UpdateProfile";
import Main from "../Main/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main/>,
        errorElement: <ErrorPage/>,
        loader: ()=> fetch('https://dragon-news-mini-backend-shohagroy.vercel.app/category'),
        children: [
            {path: '/',
             element: <News/>,
             loader: ()=> fetch(`https://dragon-news-mini-backend-shohagroy.vercel.app/all-news`)

            },
            
            {path: '/category/:id',
            element: <AllNews/>,
            loader: ({params})=> fetch(`https://dragon-news-mini-backend-shohagroy.vercel.app/category/${params.id}`)
            },

            {
                path: '/:id',
                element: <PrivateRoute><FullNews/></PrivateRoute>,
                loader: ({params})=> fetch(`https://dragon-news-mini-backend-shohagroy.vercel.app/${params.id}`)
            },

            {path: '/update-profile', element: <PrivateRoute><UpdateProfile/></PrivateRoute>},
            {path: '/login', element: <Login/>},
            {path: '/sign-up', element: <SignUp/>}

        ]
    }
])
