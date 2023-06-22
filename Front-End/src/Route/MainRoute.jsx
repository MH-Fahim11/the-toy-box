import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../component/Login/Login/Login";
import Register from "../component/Login/Register/Register";
import Blogs from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import MyToys from "../Pages/MyToys/MyToys";
import ViewDetails from "../Pages/AllToys/ViewDetails/ViewDetails";
import Error from "../Pages/error/error-page"
import Trams from "../Pages/Terms/Trams"


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {
               path:"/",
               element:<Home></Home>,
            },
            {
               path:"/login",
               element:<Login></Login>,
            },
            
            {
               path:"/register",
               element:<Register></Register>,
            },
            {
               path:"/blog",
               element:<Blogs></Blogs>,
            },
            {
               path:"/addToys",
               element: <PrivateRoute><AddToys></AddToys></PrivateRoute> ,
            },
            {
               path:"/allToys",
               element: <AllToys></AllToys> ,
            },
            {
               path:"/myToys",
               element:  <PrivateRoute><MyToys></MyToys></PrivateRoute>,
               loader:()=> fetch('https://the-toy-box-server.vercel.app/toys')
            },
            {
               path:"/update/:id",
               element: <UpdateToy></UpdateToy> ,
               loader:({params})=> fetch(`https://the-toy-box-server.vercel.app/toys/${params.id}`)
            }, 
            {
               path:"/viewDetails/:id",
               element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>  ,
               loader:({params})=> fetch(`https://the-toy-box-server.vercel.app/toys/${params.id}`)
            }, 
            {
               path: '/terms',
               element: <Trams></Trams>,
           }
        ]
    }
])

export default router;