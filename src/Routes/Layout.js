import { createBrowserRouter } from "react-router-dom";
import AllNews from "../components/AllNews";
import ErrorPage from "../components/ErrorPage";
import FullNews from "../components/FullNews";
import News from "../components/News";
import Main from "../Main/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main/>,
        errorElement: <ErrorPage/>,
        loader: ()=> fetch('http://localhost:5000/category'),
        children: [
            {path: '/',
             element: <News/>,
             loader: ()=> fetch(`http://localhost:5000/all-news`)

            },
            
            {path: '/category/:id',
            element: <AllNews/>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: '/:id',
                element: <FullNews/>,
                loader: ({params})=> fetch(`http://localhost:5000/${params.id}`)
            }
        ]
    }
])
